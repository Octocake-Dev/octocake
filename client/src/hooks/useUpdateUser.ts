import { useMutation } from "react-query";
import toast from "react-hot-toast";

import { instance } from "@/lib/axios";

import { UserData } from "@/types/user";

const useUpdateUser = (username: string) =>
  useMutation((data: UserData) => instance.put(`/users/${username}`, data), {
    onSuccess: () => {
      toast.success("Your profile was updated successfully!");
    },
    onError: (err) => {
      if ("message" in (err as Error)) {
        toast.error((err as Error).message);
      }
    },
  });

export default useUpdateUser;
