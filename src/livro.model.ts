import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Livro extends Model<Livro> {
    @Column({
        type: DataType.STRING(60),
        allowNull: false
    })
    codigo: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nome: string;

    @Column({
        type: DataType.DECIMAL(10, 2), // Tamanho 10, 2 casas decimais
        allowNull: false
    })
    preco: number;
}