import { useQuery } from "react-query";
import toast from "react-hot-toast";

import { instance } from "@/lib/axios";

import { IUser } from "@/types/user";

export const getUser = async (username: string): Promise<IUser> => {
  const { data } = await instance.get(`/users/${username}`);

  return data;
};

export const useGetUser = (username: string) =>
  useQuery<IUser>(["user", username], () => getUser(username), {
    onError: (err) => {
      if ("message" in (err as Error)) {
        toast.error((err as Error).message);
      }
    },
  });

export const useIsFollowed = (username: string) =>
  useQuery(["user", username, "isFollowed"], () =>
    instance.get(`/users/${username}/isFollowed`).then((res) => res.data)
  );
