import { Table, Column, Model , DataType, AllowNull} from 'sequelize-typescript';
@Table 
export class User extends Model<User>{
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    username!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    email!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password!: string;
}