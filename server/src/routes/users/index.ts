import express from "express";

import {
  getUser,
  isFollowed,
  toggleFollow,
} from "../../controllers/users.controller";
import verifyToken from "../../middlewares/verifyToken";

const router = express.Router();

router.get("/:username", getUser);

router.get("/:username/isFollowed", verifyToken, isFollowed);

router.put("/:username", verifyToken, toggleFollow);

export default router;
