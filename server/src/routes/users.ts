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

// TODO: path should be "/:username"
router.put("/:username/profile", verifyToken, UpdateUser);

router.get("/:username/isFollowed", verifyToken, isFollowed);

// TODO: path should be "/:username/toggleFollow"
router.put("/:username", verifyToken, toggleFollow);

export default router;
