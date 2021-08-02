import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

import { TPost } from "@/types/post";

export const getPosts = async (): Promise<TPost[]> => {
  const { data } = await instance.get("/posts");

  return data;
};

export const useGetPosts = () => useQuery<TPost[]>("posts", () => getPosts());
