import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

const useCreatePost = (oc_token: string) =>
  useMutation(
    (data: any) => instance.post(`/posts`, data, { headers: { oc_token } }),
    {
      onSuccess: () => {
        // Do something
      },
      onError: () => {
        // Do something
      },
    }
  );

export default useCreatePost;
