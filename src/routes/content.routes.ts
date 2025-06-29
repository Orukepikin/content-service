import express from 'express';
import { createPost, getPostsByCommunity, addComment, getAllPosts, getPostById, updatePost, deletePost, uploadMedia, deleteComment, getAllCommentsByPostId, likePost, likeComment, getPostLikeCount, getCommentLikeCount, searchPost, createCommunity, createEvent, updateEvent, deleteEvent, getAllEvents, getEventById, getCommunityById } from '../controller/content.controller';
import { memoryUpload } from '../utils/multer';

const router = express.Router();

router.post('/posts/create', createPost);
router.get('/posts/community/:id', getPostsByCommunity);
router.get('/posts', getAllPosts);
router.get('/posts/:post_id', getPostById);
router.put('/posts/:post_id/update', updatePost);
router.delete('/posts/:post_id/delete', deletePost);


// create community route
router.post('/communities/create', createCommunity);
router.get('/communities/:id', getCommunityById);


// Media upload route
router.post('/media/upload', memoryUpload.single('file'), uploadMedia);

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
router.post('/posts/search', searchPost);


// Events routes
router.post('/events/create', createEvent);
router.put('/events/:id', updateEvent);
router.delete('/events/:id', deleteEvent);

router.get('/events/getAll', getAllEvents);
router.get('/events/:id', getEventById);

export default router;
