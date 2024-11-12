import express from 'express';
import { importChat } from "../controller/chatController";
import multer from "multer";
import { authenticatToken } from "../middleware/authMiddleware";

const upload = multer({dest:' upload/'})

const router = express.Router();
router.post('/import-chat',authenticatToken,upload.single('file'), importChat);

export default router;