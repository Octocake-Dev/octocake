import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

import { IPost } from "@/types/post";

export const getPostBySlug = async (slug: string): Promise<IPost> => {
  const { data } = await instance.get(`/posts/${slug}`);

  return data;
};

export const useGetPostBySlug = (slug: string) =>
  useQuery<IPost>(["post", slug], () => getPostBySlug(slug));
