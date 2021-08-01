import Router from "next/router";

import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

const useCreatePost = (oc_token: string) =>
  useMutation(
    // TODO: Remove any
    (data: any) => instance.post(`/posts`, data, { headers: { oc_token } }),
    {
      onSuccess: ({ data }) => {
        Router.push(`/p/${data.slug}`);
      },
      onError: () => {
        // Do something
      },
    }
  );

export default useCreatePost;
