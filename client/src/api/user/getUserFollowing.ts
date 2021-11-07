import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

import type { ISimpleUser, TCurrentUser } from "@/types/user";

export interface IUserFollowing extends TCurrentUser {
  following: ISimpleUser[];
}

export const getUserFollowing = async (
  username: string
): Promise<IUserFollowing> => {
  const { data } = await instance.get(`/users/${username}/following`);

  return data;
};

export const useGetUserFollowing = (username: string) =>
  useQuery<IUserFollowing, Error>(["user", username, "following"], () =>
    getUserFollowing(username)
  );
