import React from "react";
// import PropTypes from "prop-types";
import { useRouter } from "next/router";

import { NextSeo } from "next-seo";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

import { getUser, useGetUser } from "@/api/user/getUser";

const User = () => {
  const {
    isFallback,
    query: { username },
  } = useRouter();

  const { data: user } = useGetUser(username);

  if (isFallback) return <div>loading...</div>;

  return (
    <>
      <NextSeo title={`${user.githubName} - Octocake`} />

      <section>
        <div>
          <h1 className="text-3xl font-bold">{user.githubName}</h1>
        </div>
      </section>
    </>
  );
};

export const getStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();

  const { username } = params;

  await queryClient.prefetchQuery(["user", username], () => getUser(username));

  return { props: { dehydratedState: dehydrate(queryClient) }, revalidate: 1 };
};

// User.propTypes = {};

export default User;
