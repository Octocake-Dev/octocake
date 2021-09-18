import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";

import { instance } from "@/lib/axios";

const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (slug: string) => await instance.delete(`/posts/${slug}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("user");
        queryClient.invalidateQueries("posts");
        toast.success("Your post was deleted successfully!");
      },
      onError: (err) => {
        if ("message" in (err as Error)) {
          toast.error((err as Error).message);
        }
      },
    }
  );
};

export default useDeletePost;
