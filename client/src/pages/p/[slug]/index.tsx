import React from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import { NextSeo } from "next-seo";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

import { getPostBySlug, useGetPostBySlug } from "@/api/post/getPostBySlug";
import { baseUrl } from "@/lib/constants";
import Loading from "@/components/Loading";

const Post = () => {
  const { isFallback, query } = useRouter();

  const { data: post } = useGetPostBySlug(query.slug as string);

  if (isFallback) return <Loading />;

  const { title, description, slug } = post || {};
  const url = `${baseUrl}/p/${slug}`;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ title, description, url }}
      />

      <section className="flex flex-col justify-center items-center space-y-5 min-h-screen">
        <div>
          <h1 className="text-3xl font-bold">Work In Progress!</h1>
        </div>
      </section>
    </>
  );
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
