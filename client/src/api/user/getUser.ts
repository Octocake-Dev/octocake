import { useQuery } from "react-query";

import { instance } from "@/utils/axios";

export const getUser = async (username: any) => {
  const { data } = await instance.get(`/user/${username}`);

  return data;
};

export const useGetUser = (username: any) =>
  useQuery(["user", username], () => getUser(username));
