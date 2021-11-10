import type { ISimpleUser } from "./user";

export type IPost = {
  id: string;
  title: string;
  description: string;
  slug: string;
  ownerId: number;
  createdAt: string;
  owner: ISimpleUser;
  body: string;
};

export type PostData = {
  title: string;
  description: string;
  published: boolean;
  body: string;
};
