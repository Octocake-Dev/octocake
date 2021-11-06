import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

export const getUserDashboardData = async () => {
  const { data } = await instance.get("/current_user/dashboard");

  return data;
};

export const useGetUserDashboardData = (username: string) =>
  useQuery(["user", username, "dashboard"], () => getUserDashboardData());
