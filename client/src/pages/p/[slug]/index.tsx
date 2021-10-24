import React from "react";
import { useRouter } from "next/router";
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";

import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

import { getPostBySlug, useGetPostBySlug } from "@/api/posts/getPostBySlug";
import Loading from "@/components/Loading";
import PostPage from "@/modules/post/PostPage";

const Post = () => {
  const { isFallback, query } = useRouter();

  const { data: post } = useGetPostBySlug(query.slug as string);

  if (isFallback) return <Loading />;

  return <PostPage post={post} />;
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const queryClient = new QueryClient();

  const post = await queryClient.fetchQuery(["post", params?.slug], () =>
    getPostBySlug(params?.slug as string)
  );

  return {
    props: { dehydratedState: dehydrate(queryClient) },
    // FIXME: Fix TS error
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    notFound: post.name === "NotFoundError",
    revalidate: 1,
  };
};

export default Post;
