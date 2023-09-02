import express from "express";
import { signUp, signin } from "../../controllers/users";
import { authToken } from "../../middlewares/auth";
const router = express();

router.post("/api/signup", signUp);
router.post("/api/signin", signin);
router.use(authToken);
router.get("/", (req, res) => {
  res.send("Passou");
});

export default router;
