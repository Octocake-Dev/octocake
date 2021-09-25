import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

import { IUser } from "@/types/user";

export const getUser = async (username: string): Promise<IUser> => {
  const { data } = await instance.get(`/users/${username}`);

  return data;
};

const getIsFollowed = async (username: string) => {
  const { data } = await instance.get(`/users/${username}/isFollowed`);

  return data;
};

export const useGetUser = (username: string) =>
  useQuery<IUser, Error>(["user", username], () => getUser(username));

export const useIsFollowed = (username: string) =>
  useQuery(["user", username, "isFollowed"], () => getIsFollowed(username), {
    onError: () => null,
  });
