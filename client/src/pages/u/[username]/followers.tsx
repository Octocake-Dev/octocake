import React from "react";
import { useRouter } from "next/router";
import type {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPaths,
} from "next";

import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

import { getUser, useGetUser } from "@/api/user/getUser";
import Loading from "@/components/Loading";
import FollowersPage from "@/modules/user/FollowersPage";

const Followers = () => {
  const { isFallback, query } = useRouter();

  const { data: user } = useGetUser(query.username as string);

  if (isFallback) return <Loading />;

  return <FollowersPage user={user} />;
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const queryClient = new QueryClient();

  const user = await queryClient.fetchQuery(["user", params?.username], () =>
    getUser(params?.username as string)
  );

  return {
    props: { dehydratedState: dehydrate(queryClient) },
    // FIXME: Fix TS error
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    notFound: user.name === "NotFoundError",
    revalidate: 1,
  };
};

export default Followers;
