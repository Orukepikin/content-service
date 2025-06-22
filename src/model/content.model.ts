import { db } from "../utils/db.connection.utils";
import { Prisma } from "../../generated/prisma";
import { get } from "http";

interface CreatePostDto {
    title: string;
    category: string;
    description: string;
    mediaUrl?: string | null;
    user_id: string;
    community_id: string;
}

interface CommentInputDto {
    content: string;
    user_id: string;
    post_id: string;
    parent_id?: string | null;
}

export const contentService = {
    uploadMedia: async (file: Express.Multer.File) => {
        if (!file) {
            throw new Error("No file uploaded");
        }
        try {
            const result = await db.cloudinary.uploader.upload(file.path);
            return result.secure_url;
        } catch (error) {
            throw new Error("Failed to upload media");
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
