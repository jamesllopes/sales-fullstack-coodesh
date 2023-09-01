const config = require("./config");

import { Dialect, Sequelize } from "sequelize";

const sequelizeConnection = new Sequelize(
  process.env.MYSQL_DATABASE as string,
  process.env.MYSQL_USER as string,
  process.env.MYSQL_PASSWORD as string,
  {
    host: config.host,
    dialect: config.dialect as Dialect,
  }
);
export default sequelizeConnection;
