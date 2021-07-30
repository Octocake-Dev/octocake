import express from "express";

import { getUser } from "../../controllers/usersController.js";

const router = express.Router();

router.get("/:username", getUser);

export default router;
