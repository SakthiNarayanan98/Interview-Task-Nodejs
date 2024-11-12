import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { ChatMessage } from '../models/chatModel';
import {Task  } from '../models/teskModel';
import { User } from '../models/userModel';

dotenv.config();

export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [User, Task,ChatMessage],
    logging: false
});
