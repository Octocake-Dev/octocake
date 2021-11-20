import { Router } from "express";

import { getUsers } from "../../controllers/admin/users.controller";
import isAdmin from "../../middlewares/isAdmin";

const router = Router();

router.get("/", isAdmin, getUsers);

export default router;
