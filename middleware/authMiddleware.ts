import {Response, Request, NextFunction} from 'express';

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export const authenticatToken = ( req: any, res:Response,next: NextFunction) => {
    const authHeader = req.header['authorization'];
    const token = authHeader && authHeader.split('')[1];

    if(!token) {
        return res.status(401).json
        ({message: 'Access token missing'});
    }

    jwt.verify(token, process.env.TOKEN!,(err, user: any) =>{
        if(err){
            return res.status(403).json({message: 'invalid token'});
        }
        req.user = user;
            next();
    })
}