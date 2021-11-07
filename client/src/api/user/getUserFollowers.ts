import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

import type { ISimpleUser, TCurrentUser } from "@/types/user";

export interface IUserFollowers extends TCurrentUser {
  followedBy: ISimpleUser[];
}

export const getUserFollowers = async (
  username: string
): Promise<IUserFollowers> => {
  const { data } = await instance.get(`/users/${username}/followers`);

  return data;
};

export const useGetUserFollowers = (username: string) =>
  useQuery<IUserFollowers, Error>(["user", username, "followers"], () =>
    getUserFollowers(username)
  );
