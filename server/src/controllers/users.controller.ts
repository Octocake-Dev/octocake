import { Request, Response } from "express";

import { prisma } from "../config/prisma";
import { CustomRequest } from "../types/request";

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { githubUsername: req.params.username },
      include: {
        posts: { include: { owner: true }, orderBy: { createdAt: "desc" } },
        followedBy: true,
        following: true,
      },
    });

    res.status(200).send(user);
  } catch (err) {
    res.send(err);
  }
};

export const isFollowed = async (req: CustomRequest, res: Response) => {
  try {
    const { username } = req.params;

    const isFollowed = await prisma.user.findUnique({
      where: { githubUsername: username },
      select: {
        followedBy: { where: { githubId: { equals: Number(req.user.id) } } },
      },
    });

    res.status(200).send(isFollowed);
  } catch (err) {
    res.send(err);
  }
};

export const toggleFollow = async (req: CustomRequest, res: Response) => {
  try {
    const { username } = req.params;

    const isFollowed = await prisma.user.findUnique({
      where: { githubUsername: username },
      include: {
        followedBy: { where: { githubId: { equals: Number(req.user.id) } } },
      },
    });

    if (isFollowed.githubId === Number(req.user.id)) {
      return res.status(400).json({
        success: false,
        message: "You can't follow yourself",
      });
    }

    if (isFollowed.followedBy.length) {
      // Unfollow
      await prisma.user.update({
        where: { githubId: Number(req.user.id) },
        data: { following: { disconnect: { githubUsername: username } } },
      });

      await prisma.user.update({
        where: { githubUsername: username },
        data: {
          followedBy: { disconnect: { githubId: Number(req.user.id) } },
        },
      });

      res.status(200).send({
        success: true,
        message: `You have successfully unfollowed @${username}`,
      });
    } else {
      // Follow
      await prisma.user.update({
        where: { githubId: Number(req.user.id) },
        data: { following: { connect: { githubUsername: username } } },
      });

      await prisma.user.update({
        where: { githubUsername: username },
        data: { followedBy: { connect: { githubId: Number(req.user.id) } } },
      });

      res.status(200).send({
        success: true,
        message: `You have successfully followed @${username}`,
      });
    }
  } catch (err) {
    res.send(err);
  }
};
