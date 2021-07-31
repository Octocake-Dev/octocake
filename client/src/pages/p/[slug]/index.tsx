import React from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import { NextSeo } from "next-seo";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

import { getPostBySlug, useGetPostBySlug } from "@/api/post/getPostBySlug";

const Post = () => {
  const { isFallback, query } = useRouter();

  const { data: post } = useGetPostBySlug(query.slug as string);

  if (isFallback) return <div>loading...</div>;

  return (
    <>
      <NextSeo />

      <section>
        <code>
          <pre>{JSON.stringify(post, null, 2)}</pre>
        </code>
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

  // FIXME: Fix TS warning
  const { slug } = params!;

  const post = await queryClient.fetchQuery(["post", slug], () =>
    getPostBySlug(slug as string)
  );

  return {
    props: { dehydratedState: dehydrate(queryClient) },
    // FIXME: Fix TS error
    notFound: post.name === "NotFoundError",
    revalidate: 1,
  };
};

export default Post;
