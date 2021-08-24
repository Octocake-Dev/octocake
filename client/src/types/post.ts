import { ISimpleUser } from "./user";

export type IPost = {
  id: string;
  title: string;
  description: string;
  slug: string;
  published: boolean;
  ownerId: number;
  createdAt: string;
  updatedAt: string;
  owner: ISimpleUser;
};

export type PostData = {
  title: string;
  description: string;
  published: boolean;
};
