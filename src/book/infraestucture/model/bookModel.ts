import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "books",
    timestamps: false
})
class Book extends Model{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    public id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    public name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    public autor!: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    public estado!: boolean;
}