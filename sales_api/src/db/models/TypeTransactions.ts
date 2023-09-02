import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../sequelize";

interface TypeTransactionsAttributes {
  id: number;
  description: string;
  nature: string;
  signal: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface TypeTransactionsInput
  extends Optional<TypeTransactionsAttributes, "id"> {}

export default class TypeTransactions
  extends Model<TypeTransactionsAttributes, TypeTransactionsInput>
  implements TypeTransactionsAttributes
{
  public id!: number;
  public description!: string;
  public nature!: string;
  public signal!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

TypeTransactions.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nature: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    signal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
  }
);
