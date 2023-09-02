import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../sequelize";
import TypeTransactions from "./TypeTransactions";

interface TransactionsAttributes {
  id: number;
  type_id: number;
  date: Date;
  product: string;
  value: number;
  seller: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface TransactionsInput
  extends Optional<TransactionsAttributes, "id"> {}

export default class Transactions
  extends Model<TransactionsAttributes, TransactionsInput>
  implements TransactionsAttributes
{
  public id!: number;
  public type_id!: number;
  public date!: Date;
  public product!: string;
  public value!: number;
  public seller!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Transactions.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seller: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
  }
);

Transactions.belongsTo(TypeTransactions, {
  foreignKey: "type",
  as: "transactionType",
});
