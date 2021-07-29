import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

const useDeletePost = (slug: string, oc_token: string) => {
  const mutation = useMutation(
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

  return mutation;
};

export default useDeletePost;
