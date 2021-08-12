import { useMutation, useQueryClient } from "react-query";

import { instance } from "@/lib/axios";

const useFollow = (username: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    () => instance.put(`/users/${username}`, null, { withCredentials: true }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user", username]);
      },
      onError: () => {
        // Do something
      },
    }
  );
};

export default useFollow;
