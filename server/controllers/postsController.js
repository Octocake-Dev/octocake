import slugify from "slugify";

import { prisma } from "../config/prisma.js";
import randomString from "../utils/randomString.js";

const RANDOM_STRING_LENGTH = 10;

export const createPost = async (req, res) => {
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
        owner: { connect: { githubId: Number(req.user.id) } },
      },
    });

    res.status(201).send(post);
  } catch (err) {
    res.send(err);
  }
};

export const updatePost = async (req, res) => {
  const { slug } = req.params;

  const post = await prisma.post.findUnique({
    where: { slug },
    include: { owner: true },
  });

  if (post.owner.githubId === Number(req.user.id)) {
    try {
      const { title, description, published } = req.body;

      const generatedSlug = slugify(
        `${title} ${randomString(RANDOM_STRING_LENGTH)}`
      );

      const updatedPost = await prisma.post.update({
        where: { slug },
        data: { title, description, published, slug: generatedSlug },
      });

      res.status(200).send(updatedPost);
    } catch (err) {
      res.send(err);
    }
  } else {
    res.status(403).send("Forbidden");
  }
};

export const deletePost = async (req, res) => {
  const { slug } = req.params;

  const post = await prisma.post.findUnique({
    where: { slug },
    include: { owner: true },
  });

  if (post.owner.githubId === Number(req.user.id)) {
    try {
      const deletedPost = await prisma.post.delete({
        where: { slug },
      });

      res.status(200).send(deletedPost);
    } catch (err) {
      res.send(err);
    }
  } else {
    res.status(403).send("Forbidden");
  }
};

export const getPosts = async (req, res) => {
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

export const getPostBySlug = async (req, res) => {
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
