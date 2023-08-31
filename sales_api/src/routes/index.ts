import bodyParser from "body-parser";
import users from "./users";

export default (app) => {
  app.use(bodyParser.json());
  app.use(users);
};
