import express from "express";
import { authToken } from "../../middlewares/auth";
import { uploadFile } from "../../controllers/transactions";
const router = express();

router.use(authToken);
router.post("/api/upload", uploadFile);

export default router;
