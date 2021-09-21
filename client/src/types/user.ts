import { IPost } from "./post";

export type ISimpleUser = {
  id: number;
  githubAvatarUrl: string;
  githubName: string;
  githubEmail: string;
  githubUsername: string;
  githubId: number;
  createdAt: string;
  updatedAt: string;
  role: "USER" | "ADMIN";
  bio?: string;
  location?: string;
  githubUrl?: string;
  twitterUrl?: string;
  mediumUrl?: string;
  stackOverflowUrl?: string;
  websiteUrl?: string;
};

export interface IUser extends ISimpleUser {
  posts: IPost[];
  followedBy: ISimpleUser[];
  following: ISimpleUser[];
}

export type UserData = {
  bio: string;
  location: string;
  twitterUrl: string;
  mediumUrl: string;
  stackOverflowUrl: string;
  websiteUrl: string;
};
