import { Router } from "express";

import {
  getUser,
  getUserDashboardData,
  UpdateUser,
  getUserFollowers,
  getUserFollowing,
  toggleFollow,
} from "../controllers/users.controller";
import verifyToken from "../middlewares/verifyToken";

const router = Router();

router.get("/:username", getUser);

router.get("/:username/dashboard", verifyToken, getUserDashboardData);

router.get("/:username/followers", getUserFollowers);

router.get("/:username/following", getUserFollowing);

router.put("/:username", verifyToken, UpdateUser);

router.put("/:username/toggleFollow", verifyToken, toggleFollow);

export default router;
