import { Table, Column, Model , DataType, AllowNull} from 'sequelize-typescript';
@Table 
export class ChatMessage extends Model<ChatMessage>{
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    sender: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
        unique: true
    })
    message: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    timestamp: Date;
}