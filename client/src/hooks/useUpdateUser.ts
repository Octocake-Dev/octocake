import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

import { UserData } from "@/types/user";

const useUpdateUser = (username: string) =>
  useMutation(
    async (data: UserData) =>
      await instance.put(`/users/${username}/profile`, data)
  );

export default useUpdateUser;
