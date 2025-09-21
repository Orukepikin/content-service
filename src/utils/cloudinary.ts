import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import { Readable } from 'stream';
import streamifier from "streamifier";


dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



export const uploadToCloudinary = async (
  fileBuffer: Buffer,
  mimetype: string,
  folder?: string
): Promise<string> => {
  const base64 = `data:${mimetype};base64,${fileBuffer.toString("base64")}`;
  const result = await cloudinary.uploader.upload(base64, {
    resource_type: "image",
    folder: folder || "uploads",
  });
  return result.secure_url;
};



export default cloudinary;
