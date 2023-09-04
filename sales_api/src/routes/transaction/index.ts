import express from "express";
import { authToken } from "../../middlewares/auth";
import { uploadFile, getTransactions } from "../../controllers/transactions";
const router = express();

router.post("/api/upload", authToken, uploadFile);
router.get("/api/transactions", authToken, getTransactions);

export default router;
