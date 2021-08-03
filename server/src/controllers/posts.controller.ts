import { Request, Response } from "express";

import { Post as PostModel } from "@prisma/client";
import slugify from "slugify";

import { prisma } from "../config/prisma";
import randomString from "../utils/randomString";

const RANDOM_STRING_LENGTH = 10;

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, description, published } = req.body;

    const generatedSlug = slugify(
      `${title} ${randomString(RANDOM_STRING_LENGTH)}`
    );

    const post = await prisma.post.create({
      data: {
        title,
        description,
        published,
        slug: generatedSlug,
        // @ts-ignore
        owner: { connect: { githubId: Number(req.user.id) } },
      },
    });

    res.status(201).send(post);
  } catch (err) {
    res.send(err);
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const post = await prisma.post.findUnique({
      where: { slug },
      include: { owner: true },
    });

    // @ts-ignore
    if (post.owner.githubId === Number(req.user.id)) {
      const { title, description, published } = req.body;

      const generatedSlug = slugify(
        `${title} ${randomString(RANDOM_STRING_LENGTH)}`
      );

      const updatedPost = await prisma.post.update({
        where: { slug },
        data: { title, description, published, slug: generatedSlug },
      });

      res.status(200).send(updatedPost);
    } else {
      res.status(403).send("Forbidden");
    }
  } catch (err) {
    res.send(err);
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const post = await prisma.post.findUnique({
      where: { slug },
      include: { owner: true },
    });

    // @ts-ignore
    if (post.owner.githubId === Number(req.user.id)) {
      const deletedPost = await prisma.post.delete({
        where: { slug },
      });

      res.status(200).send(deletedPost);
    } else {
      res.status(403).send("Forbidden");
    }
  } catch (err) {
    res.send(err);
  }
};

export const getPosts = async (req: Request, res: Response<PostModel[]>) => {
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

export const getPostBySlug = async (req: Request, res: Response<PostModel>) => {
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