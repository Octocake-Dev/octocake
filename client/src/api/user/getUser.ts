import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

import { User } from "@/types/user";
import { TPost } from "@/types/post";

interface IUser extends User {
  posts: TPost[];
  followedBy: User[];
  following: User[];
}

export const getUser = async (username: string): Promise<IUser> => {
  const { data } = await instance.get(`/users/${username}`);

  return data;
};

export const useGetUser = (username: string) =>
  useQuery<IUser>(["user", username], () => getUser(username));

export const useIsFollowed = (username: string) =>
  useQuery(["user", username, "isFollowed"], () =>
    instance
      .get(`/users/${username}/isFollowed`, {
        withCredentials: true,
      })
      .then((res) => res.data)
  );
