import { TPost } from "./post";

export type ISimpleUser = {
  id: number;
  githubAvatarUrl: string;
  githubName: string;
  githubEmail: string | null;
  githubUsername: string;
  githubId: number;
  createdAt: string;
  updatedAt: string;
};

export interface IUser extends ISimpleUser {
  posts: TPost[];
  followedBy: ISimpleUser[];
  following: ISimpleUser[];
}
