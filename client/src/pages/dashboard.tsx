import React from "react";

import WithAuth from "@/hocs/withAuth";

import DashboardPage from "@/modules/dashboard/DashboardPage";

const Dashboard = () => {
  return <DashboardPage />;
};

export default WithAuth(Dashboard);
