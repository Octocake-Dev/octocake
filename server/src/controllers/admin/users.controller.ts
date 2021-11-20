import { Request, Response } from "express";

import { prisma } from "../../config/prisma";
import { CustomRequest } from "../../types/request";

// @route   GET /users/:username
// @desc    Get user by username
export const getUsers = async (req: CustomRequest, res: Response) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).send(users);
  } catch (err) {
    res.send(err);
  }
};
