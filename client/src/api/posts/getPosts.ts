import { useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";

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
    onError: (err) => {
      if ("message" in (err as Error)) {
        toast.error((err as Error).message);
      }
    },
  });
};
