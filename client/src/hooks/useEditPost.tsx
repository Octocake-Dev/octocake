import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

const useEditPost = (slug: string, oc_token: string) =>
  useMutation(
    (data: any) =>
      instance.put(`/posts/${slug}`, data, { headers: { oc_token } }),
    {
      onSuccess: () => {
        // Do something
      },
      onError: () => {
        // Do something
      },
    }
  );

export default useEditPost;
