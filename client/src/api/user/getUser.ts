import { useQuery } from "react-query";

import { instance } from "@/utils/axios";

export const getUser = async (username: string) => {
  const { data } = await instance.get(`/user/${username}`);

  return data;
};

export const useGetUser = (username: string) =>
  useQuery(["user", username], () => getUser(username));
