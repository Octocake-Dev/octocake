import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

const useDeletePost = (slug: string, oc_token: string) =>
  useMutation(
    () => instance.delete(`/posts/${slug}`, { headers: { oc_token } }),
    {
      onSuccess: () => {
        // Do something
      },
      onError: () => {
        // Do something
      },
    }
  );

export default useDeletePost;
