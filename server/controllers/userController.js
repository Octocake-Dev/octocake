import { prisma } from "../config/prisma.js";

export const getUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { githubUsername: req.params.username },
      include: { posts: true },
    });

    res.status(200).send(user);
  } catch (err) {
    res.send(err);
  }
};
