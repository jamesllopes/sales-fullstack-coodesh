import { Router } from "express";
import { signUp } from "../../controllers/users";

const router = Router();

router.post("/api/users", signUp);

export default router;
