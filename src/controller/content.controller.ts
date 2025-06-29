import { Request, Response } from 'express';
import { ServiceWrapper } from '../utils/service-wrapper.util';
import { add_comment_validator, create_community_validator, create_event_validator, create_post_validator, like_comment_validator, like_post_validator, search_post_validator, update_event_validator, update_post_validator, upload_media_validator } from '../validator/content.validator';
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

export const createCommunity = async (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    let { error, value } = create_community_validator(req.body);
    if (error) {
      throw new Error(`${error.message}`);
    }

    // Check for duplicate community name (case-insensitive)
    const existingCommunity = await contentService.getCommunityByName(value.name);
    if (existingCommunity) {
      return res.status(409).json({
        status: 409,
        message: 'A community with this name already exists'
      });
    }

    const community = await contentService.createCommunity(value);
    return res.status(201).json({
      status: 201,
      message: 'Community created successfully',
      data: community
    });
  });
}

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

export const getAllEvents = async (_req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const events = await contentService.getAllEvents();
    return res.status(200).json({
      status: 200,
      message: 'Events retrieved successfully',
      data: events
    });
  });
};



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


export const addComment = (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    let { error, value } = add_comment_validator(req.body);
    if (error) throw new Error(`${error.message}`);

    const comment = await contentService.addComment(value);
    return res.status(201).json({ status: 201, message: 'Comment added successfully', data: comment });
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


export const getAllPosts = (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const posts = await contentService.getAllPost();
    return res.status(200).json({ status: 200, data: posts });
  });
};

export const getPostLikeCount = (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { post_id } = req.params;
    const count = await contentService.getPostLikeCount(post_id);
    return res.status(200).json({ status: 200, data: count });
  });
};

// Get Comment Like Count
export const getCommentLikeCount = (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { comment_id } = req.params;
    const count = await contentService.getCommentLikeCount(comment_id);
    return res.status(200).json({ status: 200, data: count });
  });
};

// Get All Comments By Post ID
export const getAllCommentsByPostId = (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { post_id } = req.params;
    const comments = await contentService.getAllCommentsByPostId(post_id);
    return res.status(200).json({ status: 200, data: comments });
  });
};

// Search Post
export const searchPost = (req: Request, res: Response) => {
  console.log('Search Post Request:', req.query);
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
   const {query} = req.query;
    if (!query || typeof query !== 'string') {
      return res.status(400).json({ status: 400, message: 'Invalid search query' });
    }
    const result = await contentService.searchPost(query);
    return res.status(200).json({ status: 200, data: result });
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

// Delete Post
export const deletePost = (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { post_id } = req.params;
    await contentService.deletePost(post_id);
    return res.status(200).json({ status: 200, message: 'Post deleted successfully' });
  });
};

// Delete Comment
export const deleteComment = (req: Request, res: Response) => {
  return ServiceWrapper.executeWithErrorHandling(res, async () => {
    const { comment_id } = req.params;
    await contentService.deleteComment(comment_id);
    return res.status(200).json({ status: 200, message: 'Comment deleted successfully' });
  });
};