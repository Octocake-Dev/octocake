import type { IPost } from "./post";

export type TCurrentUser = {
  id: number;
  githubAvatarUrl: string;
  githubName: string;
  githubUsername: string;
  bio?: string;
  location?: string;
  githubUrl?: string;
  twitterUrl?: string;
  mediumUrl?: string;
  stackOverflowUrl?: string;
  websiteUrl?: string;
};

export interface ISimpleUser extends TCurrentUser {
  // githubEmail: string;
  // githubId: number;
  // createdAt: string;
  // updatedAt: string;
  // role: "USER" | "ADMIN";
  followedBy: TCurrentUser[];
}

export interface IUser extends TCurrentUser {
  _count: {
    followedBy: number;
    following: number;
    posts: number;
  };

  posts: IPost[];
  followedBy: TCurrentUser[];
  // following: TCurrentUser[];
}

export type UserData = {
  bio: string;
  location: string;
  twitterUrl: string;
  mediumUrl: string;
  stackOverflowUrl: string;
  websiteUrl: string;
};
