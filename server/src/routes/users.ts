import { Router } from "express";

import {
  getUser,
  UpdateUser,
  isFollowed,
  toggleFollow,
} from "../controllers/users.controller";
import verifyToken from "../middlewares/verifyToken";

const router = Router();

router.get("/:username", getUser);

router.put("/:username", verifyToken, UpdateUser);

router.get("/:username/isFollowed", verifyToken, isFollowed);

router.put("/:username/toggleFollow", verifyToken, toggleFollow);

export default router;
