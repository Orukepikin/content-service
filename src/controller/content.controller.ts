import { Request, Response } from 'express';
import cloudinary from '../utils/cloudinary';

const posts: any[] = [];
const comments: any[] = [];

export const uploadMedia = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    return res.status(200).json({ url: result.secure_url });
  }
  catch (error) {
    return res.status(500).json({ error: 'Failed to upload media' });
  }
}

export const createPost = async (req: Request, res: Response) => {
  const { communityId, title, content } = req.body;
  let mediaUrl = null;

  const post = { id: posts.length + 1, communityId, title, content, mediaUrl };
  posts.push(post);
  return res.status(201).json(post);
};

export const getPostsByCommunity = (req: Request, res: Response) => {
  const { id } = req.params;
  const result = posts.filter(p => p.communityId === id);
  return res.json(result);
};

export const addComment = (req: Request, res: Response) => {
  const { postId, text, author } = req.body;
  const comment = { id: comments.length + 1, postId, text, author };
  comments.push(comment);
  return res.status(201).json(comment);
};
