import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

import type { IUser } from "@/types/user";

export const getUserFollowing = async (username: string): Promise<IUser> => {
  const { data } = await instance.get(`/users/${username}/following`);

  return data;
};

export const useGetUserFollowing = (username: string) =>
  useQuery<IUser, Error>(["user", username, "following"], () =>
    getUserFollowing(username)
  );
