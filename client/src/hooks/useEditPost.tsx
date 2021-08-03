import Router from "next/router";

import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

import { PostData } from "@/types/post";

const useEditPost = (slug: string, oc_token: string) =>
  useMutation(
    (data: PostData) =>
      instance.put(`/posts/${slug}`, data, { headers: { oc_token } }),
    {
      onSuccess: ({ data }) => {
        Router.push(`/p/${data.slug}`);
      },
      onError: () => {
        // Do something
      },
    }
  );

export default useEditPost;
