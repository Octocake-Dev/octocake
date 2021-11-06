import React from "react";

import { NextSeo } from "next-seo";

const DashboardPage = ({ data }: any) => {
  return (
    <>
      <NextSeo title="Dashboard" />

      <section>
        <h1 className="oc_text-3xl">Dashboard</h1>

        {data?.posts.map(({ id, title }: any) => (
          <div key={id}>
            <h2>{title}</h2>
          </div>
        ))}
      </section>
    </>
  );
};

export default DashboardPage;
