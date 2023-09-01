import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../sequelize";

interface UsersAttributes {
  id: number;
  name: string;
  email: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface UsersInput extends Optional<UsersAttributes, "id"> {}
export interface UsersOuput extends Required<UsersAttributes> {}

export default class Users
  extends Model<UsersAttributes, UsersInput>
  implements UsersAttributes
{
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
  }
);
