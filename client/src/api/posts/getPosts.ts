import { useQuery, useQueryClient } from "react-query";

import { instance } from "@/lib/axios";

import { IPost } from "@/types/post";

export const getPosts = async (): Promise<IPost[]> => {
  const { data } = await instance.get("/posts");

  return data;
};

export const useGetPosts = () => {
  const queryClient = useQueryClient();

  return useQuery<IPost[]>("posts", () => getPosts(), {
    onSuccess: (posts) => {
      posts.forEach((post) => {
        queryClient.setQueryData(["post", post.slug], post);
      });
    },
  });
};
