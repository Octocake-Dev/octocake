import React from "react";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";

import { NextSeo } from "next-seo";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

import { getUser, useGetUser } from "@/api/user/getUser";
import Post from "@/components/post";

import { TPost } from "@/types/post";

const User = () => {
  const { isFallback, query } = useRouter();

  const { data: user } = useGetUser(query.username as string);

  if (isFallback) return <div>loading...</div>;

  return (
    <>
      <NextSeo title={`${user.githubName} - Octocake`} />

      <section>
        <div>
          <h1 className="text-3xl font-bold">{user.githubName}</h1>

          {user.posts.length ? (
            <>
              <h3>Posts</h3>

              {user.posts.map((post: TPost) => (
                <Post post={post} key={post.id} />
              ))}
            </>
          ) : null}
        </div>
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const queryClient = new QueryClient();

  const { username } = params!;

  const user = await queryClient.fetchQuery(["user", username], () =>
    getUser(username as string)
  );

  return {
    props: { dehydratedState: dehydrate(queryClient) },
    notFound: user.name === "NotFoundError",
    revalidate: 1,
  };
};

export default User;
