import { Request, Response } from "express";

import slugify from "slugify";

import { prisma } from "../config/prisma";
import randomString from "../utils/randomString";

import { CustomRequest } from "../types/request";

const RANDOM_STRING_LENGTH = 10;

const generateSlug = (title: string) =>
  slugify(`${title} ${randomString(RANDOM_STRING_LENGTH)}`);

export const createPost = async (req: CustomRequest, res: Response) => {
  try {
    const { title, description, published } = req.body;

    const post = await prisma.post.create({
      data: {
        title,
        description,
        published,
        slug: generateSlug(title),
        owner: { connect: { githubId: Number(req.user.id) } },
      },
    });

    res.status(201).send(post);
  } catch (err) {
    res.send(err);
  }
};

export const updatePost = async (req: CustomRequest, res: Response) => {
  try {
    const { slug } = req.params;

    const post = await prisma.post.findUnique({
      where: { slug },
      include: { owner: true },
    });

    if (post.owner.githubId === Number(req.user.id)) {
      const { title, description, published } = req.body;

      const updatedPost = await prisma.post.update({
        where: { slug },
        data: { title, description, published, slug: generateSlug(title) },
      });

      res.status(200).send(updatedPost);
    } else {
      res.status(403).send({ success: false, message: "Forbidden" });
    }
  } catch (err) {
    res.send(err);
  }
};

export const deletePost = async (req: CustomRequest, res: Response) => {
  try {
    const { slug } = req.params;

    const post = await prisma.post.findUnique({
      where: { slug },
      include: { owner: true },
    });

    if (post.owner.githubId === Number(req.user.id)) {
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

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      include: { owner: true },
    });

    res.status(200).send(posts);
  } catch (err) {
    res.send(err);
  }
};

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
