import React from "react";

import WithAuth from "@/hocs/withAuth";

import { useGetUserDashboardData } from "@/api/user/getUserDashboardData";
import DashboardPage from "@/modules/dashboard/DashboardPage";

import type { ISimpleUser } from "@/types/user";

const Dashboard = ({ user }: { user: ISimpleUser }) => {
  const { data } = useGetUserDashboardData(user.githubUsername);

  return <DashboardPage data={data} />;
};

export default WithAuth(Dashboard);
