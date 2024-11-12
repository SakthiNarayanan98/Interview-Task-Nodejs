import express from 'express';
import { getAllTasks, getCompletedTasks, getPendingTasks } from "../controller/taskController";
import { authenticatToken } from '../middleware/authMiddleware';

const router = express.Router();
router.get('/task',authenticatToken, getAllTasks);
router.get('/task/completed',authenticatToken, getCompletedTasks);
router.get('/task/pending',authenticatToken, getPendingTasks);

export default router;