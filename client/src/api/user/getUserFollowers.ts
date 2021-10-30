import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

import type { IUser } from "@/types/user";

export const getUserFollowers = async (username: string): Promise<IUser> => {
  const { data } = await instance.get(`/users/${username}/followers`);

  return data;
};

export const useGetUserFollowers = (username: string) =>
  useQuery<IUser, Error>(["user", username, "followers"], () =>
    getUserFollowers(username)
  );
