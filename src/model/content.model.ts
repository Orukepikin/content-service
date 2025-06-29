import { db } from "../utils/db.connection.utils";
import { uploadToCloudinary } from '../utils/cloudinary';

interface CreatePostDto {
    title: string;
    category: string;
    description: string;
    mediaUrl?: string | null;
    user_id: string;
    community_id: string;
}

interface CreateCommunityDto {
    name: string;
    description?: string;
    user_id: string;
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
        console.log("Buffer media file:", file.buffer);
        if (!file) {
            throw new Error("No file uploaded");
        }

        try {
            const result = await uploadToCloudinary(file.buffer);
            return result;
        } catch (error: any) {
            console.error("Upload error:", error);
            throw new Error(error.message || "Failed to upload media");
        }
      },

    createPost: async (postData: CreatePostDto) => {
        return await db.post.create({
            data: {
                title: postData.title,
                category: postData.category,
                description: postData.description,
                mediaUrl: postData.mediaUrl ?? null,
                user_id: postData.user_id,
                community: {
                    connect: {
                        id: postData?.community_id,
                    },
                },
            },
        });
    },

    createCommunity: async (community: CreateCommunityDto) => {
        return await db.community.create({
            data: {
                name: community.name,
                description: community.description ?? null,
                user_id: community.user_id,
            },
        });
    },
    getAllCommunities: async (name?: string) => {
        return await db.community.findMany({
            where: name
                ? {
                    name: {
                        contains: name,
                        mode: 'insensitive'
                    }
                }
                : undefined,
            orderBy: { createdAt: 'desc' }
        });
    },

    getCommunityById: async (id: string) => {
        return await db.community.findUnique({
            where: { id }
        });
    },
    

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


    getCommunityByName: async (name: string) => {
        return await db.community.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: "insensitive",
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

    addComment: async (commentData: CommentInputDto) => {
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

    likePost: async (user_id: string, post_id: string) => {
        const existingLike = await db.like.findFirst({
            where: { user_id, post_id },
        });

        if (existingLike) {
            await db.like.delete({
                where: { id: existingLike.id },
            });
            return { message: "Unlike the post" };
        }

        return await db.like.create({
            data: {
                user_id,
                post: { connect: { id: post_id } },
            },
        });
    },

    likeComment: async (user_id: string, comment_id: string) => {
        const existingLike = await db.like.findFirst({
            where: { user_id, comment_id },
        });

        if (existingLike) {
            return await db.like.delete({
                where: { id: existingLike.id },
            });
        }
        return await db.like.create({
            data: {
                user_id,
                comment: { connect: { id: comment_id } },
            },
        });
    },
      
    getPostLikeCount: async (post_id: string) => {
        const count = await db.like.count({
            where: {
                post_id,
            },
        });
        return { post_id, likeCount: count };
      },

    getCommentLikeCount: async (comment_id: string) => {
        const count = await db.like.count({
            where: {
                comment_id,
            },
        });
        return { comment_id, likeCount: count };
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

    getAllCommentsByPostId: async (post_id: string) => {
        return await db.comment.findMany({
            where: { post_id },
            include: {
                replies: true,
                likes: true,
            },
            orderBy: {
                createdAt: "asc",
            },
        });
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
    
    deletePost: async (post_id: string) => {
        // Optional: delete related comments and likes first (if not using cascade)
        await db.like.deleteMany({ where: { post_id } });
        await db.comment.deleteMany({ where: { post_id } });

        return await db.post.delete({
            where: { id: post_id },
        });
    },
    deleteComment: async (comment_id: string) => {
        // Optional: delete related likes first (if not using cascade)
        await db.like.deleteMany({ where: { comment_id } });
        return await db.comment.delete({
            where: { id: comment_id },
        });
    },      

    updatePost: async (
        post_id: string,
        data: CreatePostDto
    ) => {
        return await db.post.update({
            where: { id: post_id },
            data: {
                title: data.title,
                description: data.description,
                category: data.category,
                mediaUrl: data.mediaUrl,
            },
        });
    },
      
};
