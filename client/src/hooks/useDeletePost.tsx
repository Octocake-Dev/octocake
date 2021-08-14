import { useMutation, useQueryClient } from "react-query";

import { instance } from "@/lib/axios";

const useDeletePost = (slug: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => instance.delete(`/posts/${slug}`), {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
      queryClient.invalidateQueries("posts");
    },
    onError: () => {
      // Do something
    },
  });
};

export default useDeletePost;
