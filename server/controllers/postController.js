import slugify from "slugify";

import { prisma } from "../config/prisma.js";
import randomString from "../utils/randomString.js";

export const createPost = async (req, res) => {
  try {
    const { title, description, published } = req.body;

    const RANDOM_STRING_LENGTH = 10;
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

    res.status(200).send(post);
  } catch (err) {
    res.send(err);
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
    const post = await prisma.post.findUnique({
      where: { slug: req.params.slug },
      include: { owner: true },
    });

    res.status(200).send(post);
  } catch (err) {
    res.send(err);
  }
};
