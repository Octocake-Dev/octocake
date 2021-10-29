import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";

import { instance } from "@/lib/axios";

/**
 * Follow or UnFollow a user
 * @param username username of The user that will be followed or unFollowed
 * @param userRoute username param from /u/:username path
 */

const useFollow = (username: string, userRoute?: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => instance.put(`/users/${username}/toggleFollow`), {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      queryClient.invalidateQueries(["user", userRoute]);
      queryClient.invalidateQueries(["user", username]);
    },
    onError: (err) => {
      if ("message" in (err as Error)) {
        toast.error((err as Error).message);
      }
    },
  });
};

export default useFollow;
