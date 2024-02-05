import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import BookModel from "../../../book/infraestucture/model/bookModel";

@Table({
    tableName: "users",
    timestamps: true
})
class UserModel extends Model{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    public id!: number;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public name!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public last_name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    public password!: string;

    @HasMany(() => BookModel)
    books!: BookModel[];
}

export default UserModel;