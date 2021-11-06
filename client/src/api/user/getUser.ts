import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

import type { IUser } from "@/types/user";

export const getUser = async (username: string): Promise<IUser> => {
  const { data } = await instance.get(`/users/${username}`);

  return data;
};

export const useGetUser = (username: string) =>
  useQuery<IUser, Error>(["user", username], () => getUser(username));
