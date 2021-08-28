import { Router } from "express";

import { getCurrentUser } from "../controllers/users.controller";
import verifyToken from "../middlewares/verifyToken";

const router = Router();

router.get("/", verifyToken, getCurrentUser);

export default router;
