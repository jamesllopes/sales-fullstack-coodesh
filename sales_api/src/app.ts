import express from "express";
import dotenv from "dotenv";

import users from "./routes/users";

dotenv.config();
const app = express();

const port = process.env.PORT;
app.use(express.json());

app.use(users);

app.listen(port, () => console.log(`Servidor iniciado na porta ${port}`));

export default app;
