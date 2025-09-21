import multer from 'multer';

export const memoryUpload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 2 * 1024 * 1024 // e.g. 2MB limit
    }
});
