import { User } from "./user";

export type TPost = {
  id: string;
  title: string;
  description: string;
  slug: string;
  published: boolean;
  ownerId: number;
  createdAt: string;
  updatedAt: string;
  owner: User;
};

export type PostData = {
  title: string;
  description: string;
  published: boolean;
};
