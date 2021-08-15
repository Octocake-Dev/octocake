import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

import { TPost } from "@/types/post";

export const getPostBySlug = async (slug: string): Promise<TPost> => {
  const { data } = await instance.get(`/posts/${slug}`);

  return data;
};

export const useGetPostBySlug = (slug: string) =>
  useQuery<TPost>(["post", slug], () => getPostBySlug(slug));
