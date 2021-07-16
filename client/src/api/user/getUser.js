import { useQuery } from "react-query";

import { instance } from "@/utils/axios";

export const getUser = async (username) => {
  const { data: user } = await instance.get(`/user/${username}`);

  return user;
};

export const useGetUser = (username) =>
  useQuery(["user", username], () => getUser(username));
