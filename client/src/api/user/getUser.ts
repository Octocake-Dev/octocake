import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

export const getUser = async (username: string) => {
  const { data } = await instance.get(`/users/${username}`);

  return data;
};

export const useGetUser = (username: string) =>
  useQuery(["user", username], () => getUser(username));
