import { Column, DataType, Model, Table } from "sequelize-typescript";

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
}

export default UserModel;