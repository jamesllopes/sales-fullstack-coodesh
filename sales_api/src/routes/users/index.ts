import express from "express";
import { signUp, signin } from "../../controllers/users";
const router = express();

router.post("/api/signup", signUp);
router.post("/api/signin", signin);

export default router;
