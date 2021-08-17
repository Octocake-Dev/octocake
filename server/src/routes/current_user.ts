import { Response, Router } from "express";

import { CustomRequest } from "../types/request";
import { prisma } from "../config/prisma";
import verifyToken from "../middlewares/verifyToken";

const router = Router();

router.get("/", verifyToken, async (req: CustomRequest, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { githubId: Number(req.user.id) },
    });

    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

export default router;
