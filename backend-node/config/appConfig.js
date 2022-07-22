import dotenv from "dotenv";
import { env } from "process";

dotenv.config();

const PORT = env.PORT;
const MONGO_DB_URL = env.MONGO_DB_URL;
const CLOUDINARY_NAME = env.CLOUDINARY_NAME;
const CLOUDINARY_KEY = env.CLOUDINARY_KEY;
const CLOUDINARY_SECRET = env.CLOUDINARY_SECRET;

export {
  PORT,
  MONGO_DB_URL,
  CLOUDINARY_KEY,
  CLOUDINARY_NAME,
  CLOUDINARY_SECRET
};
