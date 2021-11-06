import { Request, Response } from "express";

import { prisma } from "../config/prisma";
import { CustomRequest } from "../types/request";

// @route   GET /current_user
// @desc    Get current user
export const getCurrentUser = async (req: CustomRequest, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { githubId: req.user.id },
    });

    res.send(user);
  } catch (err) {
    res.send(err);
  }
};

// @route   GET /users/:username
// @desc    Get user by username
export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { githubUsername: req.params.username },
      include: {
        posts: {
          where: { published: true },
          include: { owner: { include: { followedBy: true } } },
          orderBy: { createdAt: "desc" },
        },
        followedBy: { include: { followedBy: true } },
        following: { include: { followedBy: true } },
      },
    });

    res.status(200).send(user);
  } catch (err) {
    res.send(err);
  }
};

// @route   GET /users/:username/dashboard
// @desc    Get user dashboard by id(signed-in user id)
export const getUserDashboardData = async (
  req: CustomRequest,
  res: Response
) => {
  try {
    const user = await prisma.user.findUnique({
      where: { githubId: req.user.id },
      select: { posts: { orderBy: { createdAt: "desc" } } },
    });

    res.status(200).send(user);
  } catch (err) {
    res.send(err);
  }
};

// @route   GET /users/:username/followers
// @desc    Get user followers by username
export const getUserFollowers = async (req: Request, res: Response) => {
  try {
    const userFollowers = await prisma.user.findUnique({
      where: { githubUsername: req.params.username },
      include: { followedBy: { include: { followedBy: true } } },
    });

    res.status(200).send(userFollowers);
  } catch (err) {
    res.send(err);
  }
};

// @route   GET /users/:username/following
// @desc    Get user following by username
export const getUserFollowing = async (req: Request, res: Response) => {
  try {
    const userFollowers = await prisma.user.findUnique({
      where: { githubUsername: req.params.username },
      include: { following: { include: { followedBy: true } } },
    });

    res.status(200).send(userFollowers);
  } catch (err) {
    res.send(err);
  }
};

// @route   PUT /users/:username
// @desc    Update user by username
export const UpdateUser = async (req: CustomRequest, res: Response) => {
  try {
    const {
      bio,
      location,
      twitterUrl,
      mediumUrl,
      stackOverflowUrl,
      websiteUrl,
    } = req.body;

    const updatedUser = await prisma.user.update({
      where: { githubId: req.user.id },
      data: {
        bio,
        location,
        twitterUrl,
        mediumUrl,
        stackOverflowUrl,
        websiteUrl,
      } as any,
    });

    res.status(200).send(updatedUser);
  } catch (err) {
    res.send(err);
  }
};

// @route   PUT /users/:toggleFollow
// @desc    Follow/UnFollow by username
export const toggleFollow = async (req: CustomRequest, res: Response) => {
  try {
    const { username } = req.params;

    const isFollowed = await prisma.user.findUnique({
      where: { githubUsername: username },
      include: {
        followedBy: { where: { githubId: { equals: req.user.id } } },
      },
    });

    if (isFollowed.githubId === req.user.id) {
      return res.status(400).json({
        success: false,
        message: "You can't follow yourself",
      });
    }

    if (isFollowed.followedBy.length) {
      // Unfollow
      await prisma.user.update({
        where: { githubId: req.user.id },
        data: { following: { disconnect: { githubUsername: username } } },
      });

      await prisma.user.update({
        where: { githubUsername: username },
        data: {
          followedBy: { disconnect: { githubId: req.user.id } },
        },
      });

      res.status(200).send({
        success: true,
        message: `You have successfully unfollowed @${username}`,
      });
    } else {
      // Follow
      await prisma.user.update({
        where: { githubId: req.user.id },
        data: { following: { connect: { githubUsername: username } } },
      });

      await prisma.user.update({
        where: { githubUsername: username },
        data: { followedBy: { connect: { githubId: req.user.id } } },
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
