import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

import { User } from "@/types/user";
import { TPost } from "@/types/post";

interface IUser extends User {
  posts: TPost[];
}

export const getUser = async (username: string): Promise<IUser> => {
  const { data } = await instance.get(`/users/${username}`);

  return data;
};

export const useGetUser = (username: string) =>
  useQuery<IUser>(["user", username], () => getUser(username));
