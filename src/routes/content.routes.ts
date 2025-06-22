import express from 'express';
import multer from 'multer';
import { createPost, getPostsByCommunity, addComment, getAllPosts, getPostById, updatePost, deletePost, uploadMedia, deleteComment, getAllCommentsByPostId, likePost, likeComment, getPostLikeCount, getCommentLikeCount, searchPost } from '../controller/content.controller';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/posts/create', createPost);
router.get('/posts/community/:id', getPostsByCommunity);
router.get('/posts', getAllPosts);
router.get('/posts/:post_id', getPostById);
router.put('/posts/:post_id/update', updatePost);
router.delete('/posts/:post_id/delete', deletePost);

// Media upload route
router.post('/media/upload', upload.single('file'), uploadMedia);

// Comment routes
router.post('/comments/add', addComment);
router.delete('/comments/:comment_id/delete', deleteComment);
router.get('/comments/post/:post_id', getAllCommentsByPostId);

// Likes routes
router.post('/posts/like', likePost);
router.post('/comments/like', likeComment);
router.get('/posts/:post_id/likes/count', getPostLikeCount);
router.get('/comments/:comment_id/likes/count', getCommentLikeCount);

// Search route
router.get('/posts/search', searchPost);

export default router;
