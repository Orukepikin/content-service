import express from 'express';
import multer from 'multer';
import { createPost, getPostsByCommunity, addComment } from '../controller/content.controller';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/posts/create', upload.single('media'), createPost);
router.get('/posts/community/:id', getPostsByCommunity);
router.post('/comments/add', addComment);
router.post('/comments/add', addComment);

export default router;
