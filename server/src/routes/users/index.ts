import express from "express";

import { getUser, toggleFollow } from "../../controllers/users.controller";
import verifyToken from "../../middlewares/verifyToken";

const router = express.Router();

router.get("/:username", getUser);

router.put("/:username", verifyToken, toggleFollow);

export default router;
