import express from 'express';
import {
    createPost,
    getPostsByCommunity,
    addComment,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
    uploadMedia,
    deleteComment,
    getAllCommentsByPostId,
    likePost,
    likeComment,
    getPostLikeCount,
    getCommentLikeCount,
    searchPost,
    createCommunity,
    createEvent,
    updateEvent,
    deleteEvent,
    getAllEvents,
    getEventById,
    getCommunityById,
    getAllCommunities,
    joinCommunity,
    getPostCount,
    createCommunityRequest,
    approveCommunityRequest,
    rejectCommunityRequest,
    getPendingCommunityRequests,
    getUserCommunityRequests,
    requestJoinCommunity,
    getPendingMemberRequests,
    approveMemberRequest,
    rejectMemberRequest,
    getUserCommunities,
    removeCommunityMember,
    getAdminDashboard,
    notifyCommunityAdminForRequestApproval,
    notifyMemberForJoinApproval,
    getCommunityMembers
} from '../controller/content.controller';
import { memoryUpload } from '../utils/multer';


const router = express.Router();

// ============= POST ROUTES =============
router.post('/posts/create', createPost);
router.get('/posts/community/:id', getPostsByCommunity);
router.get('/posts', getAllPosts);
router.get('/posts/:post_id', getPostById);
router.put('/posts/:post_id/update', updatePost);
router.delete('/posts/:post_id/delete', deletePost);
router.get('/posts/count/:user_id', getPostCount);
router.post('/posts/search', searchPost);

// ============= COMMUNITY REQUEST ROUTES =============
router.post('/communities/request', createCommunityRequest);
router.post('/communities/requests/:id/approve', approveCommunityRequest);
router.post('/communities/requests/:id/reject', rejectCommunityRequest);
router.get('/communities/requests/pending', getPendingCommunityRequests);
router.get('/communities/requests/user/:userId', getUserCommunityRequests);
router.get('/communities/requests/:id/notify-approval', notifyCommunityAdminForRequestApproval);

// ============= COMMUNITY ROUTES =============
router.post('/communities/create', createCommunity); // Now returns error - use /communities/request instead
router.get('/communities/:id', getCommunityById);
router.get('/communities', getAllCommunities);

// ============= MEMBER MANAGEMENT ROUTES =============
router.post('/communities/join', requestJoinCommunity); // Updated to use new join request system
router.post('/communities/:id/join/request', requestJoinCommunity); // Alternative endpoint
router.get('/communities/:id/members', getCommunityMembers);
router.get('/communities/:id/members/pending', getPendingMemberRequests);
router.post('/communities/:id/members/:userId/approve', approveMemberRequest);
router.post('/communities/:id/members/:userId/reject', rejectMemberRequest);
router.delete('/communities/:id/members/:userId', removeCommunityMember);
router.get('/communities/user/:userId/memberships', getUserCommunities);
router.get('/communities/:id/members/:userId/notify-approval', notifyMemberForJoinApproval);

// ============= MEDIA UPLOAD ROUTE =============
router.post('/media/upload', memoryUpload.single('file'), uploadMedia);

// ============= COMMENT ROUTES =============
router.post('/comments/add', addComment);
router.delete('/comments/:comment_id/delete', deleteComment);
router.get('/comments/post/:post_id', getAllCommentsByPostId);

// ============= LIKES ROUTES =============
router.post('/posts/like', likePost);
router.post('/comments/like', likeComment);
router.get('/posts/:post_id/likes/count', getPostLikeCount);
router.get('/comments/:comment_id/likes/count', getCommentLikeCount);

// ============= EVENTS ROUTES =============
router.post('/events/create', createEvent);
router.put('/events/:id', updateEvent);
router.delete('/events/:id', deleteEvent);
router.get('/events/getAll', getAllEvents);
router.get('/events/:id', getEventById);

// ============= ADMIN ROUTES =============
router.get('/admin/dashboard', getAdminDashboard);

export default router;
