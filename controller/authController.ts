import { Request,Response } from "express";
import { User } from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
export const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'all field are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully', user });
};
export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({where:{email} });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: ' invalid email and password' })
    }


    const token = jwt.sign({ userId: user.id }, process.env.token, { expiresIN: '1d' })
    res.json({ message: 'login successful', token })

};
