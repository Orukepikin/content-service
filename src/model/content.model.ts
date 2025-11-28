import { db } from "../utils/db.connection.utils";
import { uploadToCloudinary } from '../utils/cloudinary';
import { RequestStatus } from "../../generated/prisma";

interface CreatePostDto {
    title: string;
    category: string;
    description: string;
    media_url?: string | null;
    user_id: string;
    community_id: string;
}

interface CreateCommunityDto {
    name: string;
    description?: string;
    user_id: string;
    location: string;
}

interface CreateCommunityRequestDto {
    name: string;
    email:string;
    description?: string;
    location?: string;
    state?: string;
    lga?: string;
    requestedBy: string;
}

interface ApproveRequestDto {
    requestId: string;
    approvedBy: string;
}

interface RejectRequestDto {
    requestId: string;
    rejectedBy: string;
    reason: string;
}

interface JoinCommunityDto {
    communityId: string;
    userId: string;
}

interface ApproveMemberDto {
    communityId: string;
    userId: string;
    adminId: string;
}

interface CommentInputDto {
    content: string;
    user_id: string;
    post_id: string;
    parent_id?: string | null;
}

export interface CreateEventDto {
    title: string;
    description?: string;
    location?: string;
    startDate: Date;
    endDate: Date;
    coverImage?: string;
    createdBy: string;
}

export interface UpdateEventDto {
    title?: string;
    description?: string;
    location?: string;
    startDate?: Date;
    endDate?: Date;
    coverImage?: string;
}

export const contentService = {

    uploadMedia: async (file: Express.Multer.File) => {
        if (!file) {
            throw new Error("No file uploaded");
        }

        try {
            const result = await uploadToCloudinary(file.buffer, file.mimetype);
            return result;
        } catch (error: any) {
            console.error("Upload error:", error);
            throw new Error(error.message || "Failed to upload media");
        }
    },

    // ============= COMMUNITY REQUEST METHODS =============

    createCommunityRequest: async (data: CreateCommunityRequestDto) => {
        // Check if community name already exists (including pre-created LGA communities)
        const existingCommunity = await db.community.findFirst({
            where: {
                name: {
                    equals: data.name,
                    mode: 'insensitive',
                },
            },
        });

        if (existingCommunity) {
            throw new Error('A community with this name already exists. Please choose a different name.');
        }

        // Check if user already has a pending request with same name
        const existingRequest = await db.communityRequest.findFirst({
            where: {
                name: {
                    equals: data.name,
                    mode: 'insensitive',
                },
                status: 'PENDING',
            },
        });

        if (existingRequest) {
            throw new Error('A community request with this name is already pending approval.');
        }

        return await db.communityRequest.create({
            data: {
                name: data.name,
                email: data.email,
                description: data.description,
                location: data.location,
                state: data.state,
                lga: data.lga,
                requestedBy: data.requestedBy,
                status: 'PENDING',
            },
        });
    },

    approveCommunityRequest: async (data: ApproveRequestDto) => {
        const request = await db.communityRequest.findUnique({
            where: { id: data.requestId },
        });

        if (!request) {
            throw new Error("Community request not found");
        }

        if (request.status !== 'PENDING') {
            throw new Error(`Request is already ${request.status}`);
        }

        // Transaction to approve request, create community, and make requester an admin
        return await db.$transaction(async (tx) => {
            // 1. Update request status
            const updatedRequest = await tx.communityRequest.update({
                where: { id: data.requestId },
                data: {
                    status: 'APPROVED',
                    approvedBy: data.approvedBy,
                },
            });

            // 2. Create the community
            const community = await tx.community.create({
                data: {
                    name: request.name,
                    description: request.description,
                    location: request.location,
                    state: request.state,
                    lga: request.lga,
                    communityType: 'USER_CREATED',
                    status: 'ACTIVE',
                    createdBy: request.requestedBy,
                },
            });

            // 3. Link community to request
            await tx.communityRequest.update({
                where: { id: updatedRequest.id },
                data: { communityId: community.id },
            });

            // 4. Add requester as ADMIN
            await tx.communityMember.create({
                data: {
                    userId: request.requestedBy,
                    communityId: community.id,
                    role: 'ADMIN',
                    status: 'APPROVED',
                    joinedAt: new Date(),
                },
            });

            return { request: updatedRequest, community };
        });
    },

    rejectCommunityRequest: async (data: RejectRequestDto) => {
        const request = await db.communityRequest.findUnique({
            where: { id: data.requestId },
        });

        if (!request) {
            throw new Error("Community request not found");
        }

        if (request.status !== 'PENDING') {
            throw new Error(`Request is already ${request.status}`);
        }

        return await db.communityRequest.update({
            where: { id: data.requestId },
            data: {
                status: 'REJECTED',
                rejectionReason: data.reason,
                approvedBy: data.rejectedBy, // Reusing field for admin who acted
            },
        });
    },

   getPendingCommunityRequests: async ({ page, pageSize }: { page: number; pageSize: number }) => {
   const where = { status: RequestStatus.PENDING };
    const [items, totalItems] = await Promise.all([
        db.communityRequest.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * pageSize,
        take: pageSize,
        }),
        db.communityRequest.count({ where }),
    ]);

    return {
        items,
        page,
        pageSize,
        totalItems,
        totalPages: Math.ceil(totalItems / pageSize) || 1,
    };
    },

    getUserCommunityRequests: async (userId: string) => {
        return await db.communityRequest.findMany({
            where: { requestedBy: userId },
            orderBy: { createdAt: 'desc' },
        });
    },

    // ============= COMMUNITY METHODS =============

    // Deprecated but kept for type compatibility - throws error
    createCommunity: async (community: CreateCommunityDto) => {
        throw new Error("Direct community creation is deprecated. Use createCommunityRequest instead.");
    },

    getAllCommunities: async (name?: string) => {
        return await db.community.findMany({
            where: {
                status: 'ACTIVE',
                ...(name ? {
                    name: {
                        contains: name,
                        mode: 'insensitive'
                    }
                } : {})
            },
            include: {
                _count: {
                    select: { members: true }
                }
            },
            orderBy: { name: 'asc' }
        });
    },

    getCommunityById: async (id: string) => {
        return await db.community.findUnique({
            where: { id },
            include: {
                members: {
                    take: 5,
                    orderBy: { joinedAt: 'desc' },
                    include: {
                        // In a real app we would include user details here
                        // but we don't have a user relation in this schema
                    }
                },
                _count: {
                    select: { members: true, posts: true }
                }
            }
        });
    },

    getCommunityByName: async (name: string) => {
        return await db.community.findUnique({
            where: { name },
        });
    },

    // ============= MEMBER MANAGEMENT METHODS =============

    requestToJoinCommunity: async (data: JoinCommunityDto) => {
        const community = await db.community.findUnique({
            where: { id: data.communityId },
        });

        if (!community) {
            throw new Error("Community not found");
        }

        if (community.status !== 'ACTIVE') {
            throw new Error("This community is not active");
        }

        // Check if user already has a membership (approved, pending, or rejected)
        const existingMembership = await db.communityMember.findUnique({
            where: {
                userId_communityId: {
                    userId: data.userId,
                    communityId: data.communityId,
                },
            },
        });

        if (existingMembership) {
            if (existingMembership.status === 'APPROVED') {
                throw new Error("You are already a member of this community");
            } else if (existingMembership.status === 'PENDING') {
                throw new Error("Your join request is pending approval");
            } else if (existingMembership.status === 'REJECTED') {
                // Allow re-requesting after rejection
                return await db.communityMember.update({
                    where: { id: existingMembership.id },
                    data: {
                        status: 'PENDING',
                        requestedAt: new Date(),
                    },
                });
            }
        }

        // Facebook-like flow: System LGA communities auto-approve, user-created need approval
        const autoApprove = community.communityType === 'SYSTEM_LGA';

        return await db.communityMember.create({
            data: {
                userId: data.userId,
                communityId: data.communityId,
                role: 'MEMBER',
                status: autoApprove ? 'APPROVED' : 'PENDING',
                requestedAt: new Date(),
                joinedAt: autoApprove ? new Date() : null,
            },
        });
    },

    getPendingJoinRequests: async (communityId: string, adminId: string) => {
        // Verify admin permissions
        const adminMember = await db.communityMember.findUnique({
            where: {
                userId_communityId: {
                    userId: adminId,
                    communityId: communityId,
                },
            },
        });

        if (!adminMember || adminMember.role !== 'ADMIN' || adminMember.status !== 'APPROVED') {
            throw new Error("Only community admins can view pending requests");
        }

        return await db.communityMember.findMany({
            where: {
                communityId,
                status: 'PENDING',
            },
            orderBy: { requestedAt: 'desc' },
        });
    },

    approveMemberRequest: async (data: ApproveMemberDto) => {
        // Verify admin permissions
        const adminMember = await db.communityMember.findUnique({
            where: {
                userId_communityId: {
                    userId: data.adminId,
                    communityId: data.communityId,
                },
            },
        });

        if (!adminMember || adminMember.role !== 'ADMIN' || adminMember.status !== 'APPROVED') {
            throw new Error("Only community admins can approve requests");
        }

        const memberRequest = await db.communityMember.findUnique({
            where: {
                userId_communityId: {
                    userId: data.userId,
                    communityId: data.communityId,
                },
            },
        });

        if (!memberRequest) {
            throw new Error("Member request not found");
        }

        return await db.communityMember.update({
            where: { id: memberRequest.id },
            data: {
                status: 'APPROVED',
                joinedAt: new Date(),
            },
        });
    },

    rejectMemberRequest: async (data: ApproveMemberDto) => {
        // Verify admin permissions
        const adminMember = await db.communityMember.findUnique({
            where: {
                userId_communityId: {
                    userId: data.adminId,
                    communityId: data.communityId,
                },
            },
        });

        if (!adminMember || adminMember.role !== 'ADMIN' || adminMember.status !== 'APPROVED') {
            throw new Error("Only community admins can reject requests");
        }

        const memberRequest = await db.communityMember.findUnique({
            where: {
                userId_communityId: {
                    userId: data.userId,
                    communityId: data.communityId,
                },
            },
        });

        if (!memberRequest) {
            throw new Error("Member request not found");
        }

        return await db.communityMember.update({
            where: { id: memberRequest.id },
            data: {
                status: 'REJECTED',
            },
        });
    },

    getUserMemberships: async (userId: string) => {
        return await db.communityMember.findMany({
            where: {
                userId,
                status: 'APPROVED',
            },
            include: {
                community: true,
            },
        });
    },

    removeMember: async (communityId: string, userId: string, adminId: string) => {
        // Verify admin permissions
        const adminMember = await db.communityMember.findUnique({
            where: {
                userId_communityId: {
                    userId: adminId,
                    communityId: communityId,
                },
            },
        });

        if (!adminMember || adminMember.role !== 'ADMIN' || adminMember.status !== 'APPROVED') {
            throw new Error("Only community admins can remove members");
        }

        const membership = await db.communityMember.findUnique({
            where: {
                userId_communityId: {
                    userId: userId,
                    communityId: communityId,
                },
            },
        });

        if (!membership) {
            throw new Error("Member not found");
        }

        // Prevent removing the last admin
        if (membership.role === 'ADMIN') {
            const adminCount = await db.communityMember.count({
                where: {
                    communityId,
                    role: 'ADMIN',
                    status: 'APPROVED',
                },
            });

            if (adminCount <= 1) {
                throw new Error("Cannot remove the last admin of the community");
            }
        }

        return await db.communityMember.delete({
            where: { id: membership.id },
        });
    },

    // Kept for backward compatibility - now uses new member system
    joinCommunity: async (communityId: string, userId: string) => {
        return await contentService.requestToJoinCommunity({ communityId, userId });
    },

    // ============= EVENT METHODS =============

    createEvent: async (event: CreateEventDto) => {
        return await db.event.create({
            data: event
        });
    },

    updateEvent: async (id: string, event: UpdateEventDto) => {
        return await db.event.update({
            where: { id },
            data: event
        });
    },

    deleteEvent: async (id: string) => {
        return await db.event.delete({
            where: { id }
        });
    },

    getEventById: async (id: string) => {
        return await db.event.findUnique({
            where: { id }
        });
    },

    getAllEvents: async (title?: string) => {
        return await db.event.findMany({
            where: title
                ? {
                    title: {
                        contains: title,
                        mode: 'insensitive'
                    }
                }
                : undefined,
            orderBy: { startDate: 'asc' }
        });
    },

    // ============= POST METHODS =============

    createPost: async (postData: CreatePostDto) => {
        // Verify user is an approved member of the community
        const membership = await db.communityMember.findFirst({
            where: {
                userId: postData.user_id,
                communityId: postData.community_id,
                status: 'APPROVED',
            },
        });

        if (!membership) {
            throw new Error("You must be an approved member of the community to create posts");
        }

        return await db.post.create({
            data: {
                title: postData.title,
                category: postData.category,
                description: postData.description,
                mediaUrl: postData.media_url ?? null,
                user_id: postData.user_id,
                community: {
                    connect: {
                        id: postData?.community_id,
                    },
                },
            },
        });
    },

    getPostByTitle: async (title: string) => {
        return await db.post.findFirst({
            where: {
                title: {
                    equals: title,
                    mode: "insensitive",
                },
            },
        });
    },

    getPostsByCommunity: async (communityId: string) => {
        return await db.post.findMany({
            where: {
                community_id: communityId,
            },
            include: {
                comments: true,
                likes: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    },

    getAllPost: async () => {
        return await db.post.findMany({
            include: {
                community: true,
                comments: true,
                likes: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    },

    getPostById: async (post_id: string) => {
        return await db.post.findUnique({
            where: { id: post_id },
            include: {
                community: true,
                comments: true,
                likes: true,
            },
        });
    },

    getPostCountByUserId: async (userId: string) => {
        const count = await db.post.count({
            where: { user_id: userId },
        });
        return count;
    },

    searchPost: async (query: string) => {
        return await db.post.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: query,
                            mode: "insensitive",
                        },
                    },
                    {
                        description: {
                            contains: query,
                            mode: "insensitive",
                        },
                    },
                ],
            },
            include: {
                community: true,
                comments: true,
                likes: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    },

    updatePost: async (post_id: string, data: CreatePostDto) => {
        return await db.post.update({
            where: { id: post_id },
            data: {
                title: data.title,
                description: data.description,
                category: data.category,
                mediaUrl: data.media_url,
            },
        });
    },

    deletePost: async (post_id: string) => {
        await db.like.deleteMany({ where: { post_id } });
        await db.comment.deleteMany({ where: { post_id } });

        return await db.post.delete({
            where: { id: post_id },
        });
    },

    // ============= COMMENT METHODS =============

    addComment: async (commentData: CommentInputDto) => {
        // Verify the post exists
        const post = await db.post.findUnique({
            where: { id: commentData.post_id }
        });
        if (!post) {
            throw new Error("Post not found");
        }

        // If replying to a comment, verify parent comment exists
        if (commentData.parent_id) {
            const parentComment = await db.comment.findUnique({
                where: { id: commentData.parent_id }
            });
            if (!parentComment) {
                throw new Error("Parent comment not found");
            }
            // Ensure parent comment belongs to the same post
            if (parentComment.post_id !== commentData.post_id) {
                throw new Error("Parent comment does not belong to this post");
            }
        }

        return await db.comment.create({
            data: {
                content: commentData.content,
                user_id: commentData.user_id,
                post: {
                    connect: {
                        id: commentData.post_id,
                    },
                },
                ...(commentData.parent_id && {
                    parent: { connect: { id: commentData.parent_id } },
                }),
            },
        });
    },

    getAllCommentsByPostId: async (post_id: string) => {
        // Verify the post exists
        const post = await db.post.findUnique({
            where: { id: post_id }
        });
        if (!post) {
            throw new Error("Post not found");
        }

        return await db.comment.findMany({
            where: { post_id },
            include: {
                replies: {
                    include: {
                        likes: true,
                    },
                },
                likes: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    },

    deleteComment: async (comment_id: string) => {
        // Verify comment exists
        const comment = await db.comment.findUnique({
            where: { id: comment_id },
            include: {
                replies: true,
            },
        });
        if (!comment) {
            throw new Error("Comment not found");
        }

        // Delete all likes on this comment
        await db.like.deleteMany({ where: { comment_id } });

        // Delete likes on all nested replies
        if (comment.replies.length > 0) {
            const replyIds = comment.replies.map(r => r.id);
            await db.like.deleteMany({
                where: {
                    comment_id: { in: replyIds }
                }
            });
        }

        // Delete the comment (cascade will delete replies)
        return await db.comment.delete({
            where: { id: comment_id },
        });
    },

    // ============= LIKE METHODS =============

    likePost: async (user_id: string, post_id: string) => {
        // Verify the post exists
        const post = await db.post.findUnique({
            where: { id: post_id }
        });
        if (!post) {
            throw new Error("Post not found");
        }

        const existingLike = await db.like.findFirst({
            where: { user_id, post_id },
        });

        if (existingLike) {
            await db.like.delete({
                where: { id: existingLike.id },
            });
            return { action: "unliked", message: "Post unliked successfully" };
        }

        const like = await db.like.create({
            data: {
                user_id,
                post: { connect: { id: post_id } },
            },
        });
        return { action: "liked", message: "Post liked successfully", data: like };
    },

    likeComment: async (user_id: string, comment_id: string) => {
        // Verify the comment exists
        const comment = await db.comment.findUnique({
            where: { id: comment_id }
        });
        if (!comment) {
            throw new Error("Comment not found");
        }

        const existingLike = await db.like.findFirst({
            where: { user_id, comment_id },
        });

        if (existingLike) {
            await db.like.delete({
                where: { id: existingLike.id },
            });
            return { action: "unliked", message: "Comment unliked successfully" };
        }

        const like = await db.like.create({
            data: {
                user_id,
                comment: { connect: { id: comment_id } },
            },
        });
        return { action: "liked", message: "Comment liked successfully", data: like };
    },

    getPostLikeCount: async (post_id: string) => {
        // Verify the post exists
        const post = await db.post.findUnique({
            where: { id: post_id }
        });
        if (!post) {
            throw new Error("Post not found");
        }

        const count = await db.like.count({
            where: {
                post_id,
            },
        });
        return { post_id, likeCount: count };
    },

    getCommentLikeCount: async (comment_id: string) => {
        // Verify the comment exists
        const comment = await db.comment.findUnique({
            where: { id: comment_id }
        });
        if (!comment) {
            throw new Error("Comment not found");
        }

        const count = await db.like.count({
            where: {
                comment_id,
            },
        });
        return { comment_id, likeCount: count };
    },
};
