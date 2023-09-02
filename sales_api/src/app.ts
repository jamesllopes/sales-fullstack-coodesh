import express from "express";
import dotenv from "dotenv";

import users from "./routes/users";
import transaction from "./routes/transaction";

dotenv.config();
const app = express();

const port = process.env.PORT;
app.use(express.json());

app.use(users);
app.use(transaction);

app.listen(port, () => console.log(`Servidor iniciado na porta ${port}`));

export default app;
