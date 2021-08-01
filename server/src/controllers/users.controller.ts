import { Request, Response } from "express";

import { User as UserModel } from "@prisma/client";

import { prisma } from "../config/prisma";

export const getUser = async (req: Request, res: Response<UserModel>) => {
  try {
    const user = await prisma.user.findUnique({
      where: { githubUsername: req.params.username },
      include: {
        posts: { include: { owner: true }, orderBy: { createdAt: "desc" } },
      },
    });

    res.status(200).send(user);
  } catch (err) {
    res.send(err);
  }
};
