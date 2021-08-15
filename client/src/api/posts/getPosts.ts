import { useQuery, useQueryClient } from "react-query";

import { instance } from "@/lib/axios";

import { TPost } from "@/types/post";

export const getPosts = async (): Promise<TPost[]> => {
  const { data } = await instance.get("/posts");

  return data;
};

export const useGetPosts = () => {
  const queryClient = useQueryClient();

  return useQuery<TPost[]>("posts", () => getPosts(), {
    staleTime: 10000,
    onSuccess: (posts) => {
      posts.forEach((post) => {
        queryClient.setQueryData(["post", post.slug], post);
      });
    },
  });
};
