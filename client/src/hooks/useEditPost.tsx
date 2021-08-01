import Router from "next/router";

import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

const useEditPost = (slug: string, oc_token: string) =>
  useMutation(
    // TODO: Remove any
    (data: any) =>
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
