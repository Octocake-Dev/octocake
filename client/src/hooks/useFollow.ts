import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";

import { instance } from "@/lib/axios";

//
const useFollow = (username: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    async () => await instance.put(`/users/${username}/toggleFollow`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user", username]);
      },
      onError: (err) => {
        if ("message" in (err as Error)) {
          toast.error((err as Error).message);
        }
      },
    }
  );
};

export default useFollow;
