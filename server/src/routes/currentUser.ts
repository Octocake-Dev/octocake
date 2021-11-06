import { Router } from "express";

import {
  getCurrentUser,
  getUserDashboardData,
} from "../controllers/users.controller";
import verifyToken from "../middlewares/verifyToken";

const router = Router();

router.get("/", verifyToken, getCurrentUser);

router.get("/dashboard", verifyToken, getUserDashboardData);

export default router;
