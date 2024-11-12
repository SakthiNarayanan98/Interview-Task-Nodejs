import { Request,Response } from "express";
import multer from "multer";
import xlsx from "xlsx";
import { ChatMessage } from "../models/chatModel";


export const importChat = async (req: any, res: Response) => {
    if(!req.file){
        return res.status(400).json({message: 'file is required'});
    }
    const worknote = xlsx.readFile(req.file.path);
    const sheet = worknote.Sheets[worknote.SheetNames[0]];
    const rows = xlsx.utils.sheet_to_json(sheet);

    const messages: any = rows.map((row: any) => ({
        sender: row.sender,
        message: row.message,
        timestamp: new Date(row.timestamp),
    }));

    await ChatMessage.bulkCreate(messages);
    res.json({message: ' chat history imported successfully'})
};