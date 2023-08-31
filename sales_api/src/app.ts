import express from "express";
require("dotenv").config();
import routes from "./routes";

const app = express();

const port = process.env.PORT;

routes(app);

app.listen(port, () => console.log(`Servidor iniciado na porta ${port}`));

module.exports = app;
