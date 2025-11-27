import e, { Request, Response } from 'express';
import { ServiceWrapper } from '../utils/service-wrapper.util';
import {
  add_comment_validator,
  approve_community_request_validator,
  approve_member_validator,
  create_community_request_validator,
  create_community_validator,
  create_event_validator,
  create_post_validator,
  join_community_validator,
  like_comment_validator,
  like_post_validator,
  reject_community_request_validator,
  reject_member_validator,
  search_post_validator,
  update_event_validator,
  update_post_validator,
  upload_media_validator
} from '../validator/content.validator';
import { contentService } from '../model/content.model';


export const uploadMedia = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    if (!req.file) {
      return res.status(400).json({
        status: 400,
        message: 'No file uploaded'
      });
    }
    if (!req.file.mimetype.startsWith('image/')) {
      return res.status(400).json({
        status: 400,
        message: 'Only image files are allowed'
      });
    }

    const result = await contentService.uploadMedia(req.file);
    return res.status(200).json({
      status: 200,
      message: 'Media uploaded successfully',
      url: result
    });
  });
};

// ============= COMMUNITY REQUEST CONTROLLERS =============

export const createCommunityRequest = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    let { error, value } = create_community_request_validator(req.body);
    if (error) {
      throw new Error(`${error.message}`);
    }

    const request = await contentService.createCommunityRequest(value);
    return res.status(201).json({
      status: 201,
      message: 'Community request submitted successfully. Please wait for admin approval.',
      data: request
    });
  });
};

export const approveCommunityRequest = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { id } = req.params;
    const { approvedBy } = req.body;

    let { error, value } = approve_community_request_validator({
      requestId: id,
      approvedBy
    });
    if (error) {
      throw new Error(`${error.message}`);
    }

    const result = await contentService.approveCommunityRequest(value);
    return res.status(200).json({
      status: 200,
      message: 'Community request approved successfully',
      data: result
    });
  });
};

export const rejectCommunityRequest = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { id } = req.params;
    const { rejectedBy, reason } = req.body;

    let { error, value } = reject_community_request_validator({
      requestId: id,
      rejectedBy,
      reason
    });
    if (error) {
      throw new Error(`${error.message}`);
    }

    const result = await contentService.rejectCommunityRequest(value);
    return res.status(200).json({
      status: 200,
      message: 'Community request rejected',
      data: result
    });
  });
};

export const getPendingCommunityRequests = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const requests = await contentService.getPendingCommunityRequests();
    return res.status(200).json({
      status: 200,
      message: 'Pending community requests retrieved successfully',
      data: requests
    });
  });
};

export const getUserCommunityRequests = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { userId } = req.params;
    const requests = await contentService.getUserCommunityRequests(userId);
    return res.status(200).json({
      status: 200,
      message: 'User community requests retrieved successfully',
      data: requests
    });
  });
};

// ============= COMMUNITY CONTROLLERS =============

export const createCommunity = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    return res.status(400).json({
      status: 400,
      message: 'Direct community creation is no longer supported. Please use /communities/request endpoint to submit a community creation request.'
    });
  });
};

export const getAllCommunities = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { name } = req.query;
    const communities = await contentService.getAllCommunities(name as string);

    return res.status(200).json({
      status: 200,
      message: 'Communities retrieved successfully',
      data: communities
    });
  });
};

export const getCommunityById = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { id } = req.params;

    const community = await contentService.getCommunityById(id);
    if (!community) {
      return res.status(404).json({
        status: 404,
        message: 'Community not found'
      });
    }

    return res.status(200).json({
      status: 200,
      message: 'Community retrieved successfully',
      data: community
    });
  });
};

// ============= MEMBER MANAGEMENT CONTROLLERS =============

export const requestJoinCommunity = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    let { error, value } = join_community_validator(req.body);
    if (error) {
      throw new Error(`${error.message}`);
    }

    const result = await contentService.requestToJoinCommunity({
      communityId: value.community_id,
      userId: value.user_id
    });

    // Check if it was auto-approved (system LGA community)
    const message = result.status === 'APPROVED'
      ? 'You have successfully joined the community'
      : 'Join request submitted. Please wait for admin approval.';

    return res.status(200).json({
      status: 200,
      message,
      data: result
    });
  });
};

export const getPendingMemberRequests = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { id } = req.params;
    const { adminId } = req.query;

    if (!adminId) {
      return res.status(400).json({
        status: 400,
        message: 'adminId query parameter is required'
      });
    }

    const requests = await contentService.getPendingJoinRequests(id, adminId as string);
    return res.status(200).json({
      status: 200,
      message: 'Pending join requests retrieved successfully',
      data: requests
    });
  });
};

export const approveMemberRequest = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { id, userId } = req.params;
    const { adminId } = req.body;

    let { error, value } = approve_member_validator({
      communityId: id,
      userId,
      adminId
    });
    if (error) {
      throw new Error(`${error.message}`);
    }

    const result = await contentService.approveMemberRequest(value);
    return res.status(200).json({
      status: 200,
      message: 'Member request approved successfully',
      data: result
    });
  });
};

export const rejectMemberRequest = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { id, userId } = req.params;
    const { adminId } = req.body;

    let { error, value } = reject_member_validator({
      communityId: id,
      userId,
      adminId
    });
    if (error) {
      throw new Error(`${error.message}`);
    }

    const result = await contentService.rejectMemberRequest(value);
    return res.status(200).json({
      status: 200,
      message: 'Member request rejected',
      data: result
    });
  });
};

export const getUserCommunities = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { userId } = req.params;
    const memberships = await contentService.getUserMemberships(userId);
    return res.status(200).json({
      status: 200,
      message: 'User communities retrieved successfully',
      data: memberships
    });
  });
};

export const removeCommunityMember = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { id, userId } = req.params;
    const { adminId } = req.body;

    if (!adminId) {
      return res.status(400).json({
        status: 400,
        message: 'adminId is required in request body'
      });
    }

    await contentService.removeMember(id, userId, adminId);
    return res.status(200).json({
      status: 200,
      message: 'Member removed successfully'
    });
  });
};

// Kept for backward compatibility
export const joinCommunity = async (req: Request, res: Response) => {
  return requestJoinCommunity(req, res);
};

// ============= EVENT CONTROLLERS =============

export const createEvent = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { error, value } = create_event_validator(req.body);
    if (error) {
      throw new Error(`${error.message}`);
    }

    const event = await contentService.createEvent(value);
    return res.status(201).json({
      status: 201,
      message: 'Event created successfully',
      data: event
    });
  });
};

export const updateEvent = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { error, value } = update_event_validator(req.body);
    if (error) {
      throw new Error(`${error.message}`);
    }

    const event = await contentService.updateEvent(req.params.id, value);
    return res.status(200).json({
      status: 200,
      message: 'Event updated successfully',
      data: event
    });
  });
};

export const deleteEvent = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    await contentService.deleteEvent(req.params.id);
    return res.status(200).json({
      status: 200,
      message: 'Event deleted successfully'
    });
  });
};

export const getEventById = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const event = await contentService.getEventById(req.params.id);
    if (!event) {
      return res.status(404).json({
        status: 404,
        message: 'Event not found'
      });
    }

    return res.status(200).json({
      status: 200,
      message: 'Event retrieved successfully',
      data: event
    });
  });
};

export const getAllEvents = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { title } = req.query;
    const events = await contentService.getAllEvents(title as string);

    return res.status(200).json({
      status: 200,
      message: 'Events retrieved successfully',
      data: events
    });
  });
};

// ============= POST CONTROLLERS =============

export const createPost = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    let { error, value } = create_post_validator(req.body);
    if (error) {
      throw new Error(`${error.message}`);
    }

    // Check for duplicate post title (case-insensitive)
    const existingPost = await contentService.getPostByTitle(value.title);
    if (existingPost) {
      return res.status(409).json({
        status: 409,
        message: 'A post with this title already exists'
      });
    }

    await contentService.createPost(value);

    return res.status(201).json({
      status: 201,
      message: 'Post created successfully'
    });
  });
};

export const getPostsByCommunity = (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { id } = req.params;
    const posts = await contentService.getPostsByCommunity(id);
    return res.status(200).json({
      status: 200,
      data: posts
    });
  });
};

export const getAllPosts = (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const posts = await contentService.getAllPost();
    return res.status(200).json({ status: 200, data: posts });
  });
};

export const getPostById = (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { post_id } = req.params;
    const post = await contentService.getPostById(post_id);
    if (!post) return res.status(404).json({ status: 404, message: 'Post not found' });

    return res.status(200).json({ status: 200, data: post });
  });
};

export const getPostCount = (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const userId = req.query.userId as string;
    if (!userId) {
      throw new Error("User ID is required");
    }
    const count = await contentService.getPostCountByUserId(userId);
    return res.status(200).json({
      message: "success",
      status: 200,
      userId,
      count,
    });
  });
};

export const updatePost = (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    let { error, value } = update_post_validator(req.body);
    if (error) throw new Error(`${error.message}`);

    const { post_id } = req.params;
    const updatedPost = await contentService.updatePost(post_id, value);
    return res.status(200).json({ status: 200, message: 'Post updated successfully', data: updatedPost });
  });
};

export const deletePost = (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { post_id } = req.params;
    await contentService.deletePost(post_id);
    return res.status(200).json({ status: 200, message: 'Post deleted successfully' });
  });
};

export const searchPost = (req: Request, res: Response) => {
  console.log('Search Post Request:', req.query);
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { query } = req.query;
    if (!query || typeof query !== 'string') {
      return res.status(400).json({ status: 400, message: 'Invalid search query' });
    }
    const result = await contentService.searchPost(query);
    return res.status(200).json({ status: 200, data: result });
  });
};

// ============= COMMENT CONTROLLERS =============

export const addComment = (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    let { error, value } = add_comment_validator(req.body);
    if (error) throw new Error(`${error.message}`);

    const comment = await contentService.addComment(value);
    return res.status(201).json({ status: 201, message: 'Comment added successfully', data: comment });
  });
};

export const getAllCommentsByPostId = (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { post_id } = req.params;
    const comments = await contentService.getAllCommentsByPostId(post_id);
    return res.status(200).json({ status: 200, data: comments });
  });
};

export const deleteComment = (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { comment_id } = req.params;
    await contentService.deleteComment(comment_id);
    return res.status(200).json({ status: 200, message: 'Comment deleted successfully' });
  });
};

// ============= LIKE CONTROLLERS =============

export const likePost = (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    let { error, value } = like_post_validator(req.body);
    if (error) throw new Error(`${error.message}`);

    const result = await contentService.likePost(value.user_id, value.post_id);
    return res.status(200).json({ status: 200, message: 'Like toggled', data: result });
  });
};

export const likeComment = (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    let { error, value } = like_comment_validator(req.body);
    if (error) throw new Error(`${error.message}`);

    const result = await contentService.likeComment(value.user_id, value.comment_id);
    return res.status(200).json({ status: 200, message: 'Like toggled', data: result });
  });
};

export const getPostLikeCount = (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { post_id } = req.params;
    const count = await contentService.getPostLikeCount(post_id);
    return res.status(200).json({ status: 200, data: count });
  });
};

export const getCommentLikeCount = (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { comment_id } = req.params;
    const count = await contentService.getCommentLikeCount(comment_id);
    return res.status(200).json({ status: 200, data: count });
  });
};