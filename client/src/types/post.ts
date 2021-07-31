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
