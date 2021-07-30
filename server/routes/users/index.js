import express from "express";

import { getUser } from "../../controllers/users.controller.js";

const router = express.Router();

router.get("/:username", getUser);

export default router;
