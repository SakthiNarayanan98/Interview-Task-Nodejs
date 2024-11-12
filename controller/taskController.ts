import { Request, Response} from 'express';
import { Task } from '../models/teskModel';

export const getAllTasks = async (req: Request, res: Response) =>{
    const tasks = await Task.findAll();
    res.json(tasks);

};

export const getCompletedTasks = async (req: Request, res: Response) => {
    const tasks = await Task.findAll({ where: {status: 'completed'}});
    res.json(tasks);
};

export const getPendingTasks = async (req: Request, res: Response) => {
    const tasks = await Task.findAll({ where: {status: 'pending'}});
    res.json(tasks);
}
