import { prisma } from "../config/prisma.js";

export const getUser = async (req, res) => {
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
