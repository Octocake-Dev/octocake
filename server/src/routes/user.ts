import express, { Request, Response } from "express";

import { prisma } from "../config/prisma";
import verifyToken from "../middlewares/verifyToken";

const router = express.Router();

router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      // @ts-ignore
      where: { githubId: Number(req.user.id) },
    });

    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

export default router;
