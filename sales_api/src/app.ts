import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import users from "./routes/users";
import transaction from "./routes/transaction";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

const port = process.env.PORT;
app.use(express.json());
app.use(bodyParser.raw({ type: "*/*" }));
app.use(cors());

app.use(users);
app.use(transaction);

app.listen(port, () => console.log(`Servidor iniciado na porta ${port}`));

export default app;
