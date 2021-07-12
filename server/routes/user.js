import express from "express";

import { prisma } from "../config/prisma.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express();

router.get("/", verifyToken, async (req, res) => {
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
