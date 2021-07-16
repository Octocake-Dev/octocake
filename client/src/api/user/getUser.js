import { useQuery } from "react-query";

import { instance } from "@/utils/axios";

export const getUser = async (username) => {
  const { data } = await instance.get(`/user/${username}`);

  return data;
};

export const useGetUser = (username) =>
  useQuery(["user", username], () => getUser(username));
