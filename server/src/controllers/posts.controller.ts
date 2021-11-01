import { Request, Response } from "express";

import slugify from "slugify";

import { prisma } from "../config/prisma";
import randomString from "../utils/randomString";

import { CustomRequest } from "../types/request";

const RANDOM_STRING_LENGTH = 10;

const generateSlug = (title: string) =>
  slugify(`${title} ${randomString(RANDOM_STRING_LENGTH)}`);

// @route   POST /posts
// @desc    Create post
export const createPost = async (req: CustomRequest, res: Response) => {
  try {
    const { title, description, published, body } = req.body;

    const post = await prisma.post.create({
      data: {
        title,
        description,
        published,
        body,
        slug: generateSlug(title),
        owner: { connect: { githubId: req.user.id } },
      },
    });

    res.status(201).send(post);
  } catch (err) {
    res.send(err);
  }
};

// @route   PUT /posts/:slug
// @desc    Update post by slug
export const updatePost = async (req: CustomRequest, res: Response) => {
  try {
    const { slug } = req.params;

    const post = await prisma.post.findUnique({
      where: { slug },
      include: { owner: true },
    });

    if (post.owner.githubId === req.user.id) {
      const { title, description, body, published } = req.body;

      const updatedPost = await prisma.post.update({
        where: { slug },
        data: {
          title,
          description,
          published,
          body,
          slug: generateSlug(title),
        },
      });

      res.status(200).send(updatedPost);
    } else {
      res.status(403).send({ success: false, message: "Forbidden" });
    }
  } catch (err) {
    res.send(err);
  }
};

// @route   DELETE /posts/:slug
// @desc    Delete post by slug
export const deletePost = async (req: CustomRequest, res: Response) => {
  try {
    const { slug } = req.params;

    const post = await prisma.post.findUnique({
      where: { slug },
      include: { owner: true },
    });

    if (post.owner.githubId === req.user.id) {
      const deletedPost = await prisma.post.delete({
        where: { slug },
      });

      res.status(200).send(deletedPost);
    } else {
      res.status(403).send({ success: false, message: "Forbidden" });
    }
  } catch (err) {
    res.send(err);
  }
};

// @route   GET /posts
// @desc    Get all posts
export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      include: { owner: { include: { followedBy: true } } },
    });

    res.status(200).send(posts);
  } catch (err) {
    res.send(err);
  }
};

// @route   GET /posts/:slug
// @desc    Get post by slug
export const getPostBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const post = await prisma.post.findUnique({
      where: { slug },
      include: { owner: true },
    });

    res.status(200).send(post);
  } catch (err) {
    res.send(err);
  }
};
