import { prisma } from "../config/prisma";

type UserData = {
  bio: string;
  location: string;
  githubUrl: string;
  twitterUrl: string;
  mediumUrl: string;
  stackOverflowUrl: string;
  websiteUrl: string;
};

export const UpdateUserService = async (userId: number, data: any) => {
  try {
    return await prisma.user.update({
      where: { githubId: userId },
      data,
    });
  } catch (err) {
    throw new Error(err.message);
  }
};
