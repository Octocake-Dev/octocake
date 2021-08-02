import { useMutation, useQueryClient } from "react-query";

import { instance } from "@/lib/axios";

const useDeletePost = (slug: string, oc_token: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    () => instance.delete(`/posts/${slug}`, { headers: { oc_token } }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("user");
        queryClient.invalidateQueries("posts");
      },
      onError: () => {
        // Do something
      },
    }
  );
};

export default useDeletePost;
