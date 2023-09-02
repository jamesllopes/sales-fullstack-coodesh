import express from "express";
import { authToken } from "../../middlewares/auth";
import { createTransaction } from "../../controllers/transactions";
const router = express();

router.use(authToken);
router.post("/api/transaction", createTransaction);

export default router;
