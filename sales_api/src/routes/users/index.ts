import express from "express";
import { signUp } from "../../controllers/users";
const router = express();

router.post("/api/users", signUp);

export default router;
