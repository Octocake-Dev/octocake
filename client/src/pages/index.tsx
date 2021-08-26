import React from "react";
import { GetStaticProps } from "next";

import { dehydrate } from "react-query/hydration";
import { QueryClient } from "react-query";
import { NextSeo } from "next-seo";

import { getPosts, useGetPosts } from "@/api/posts/getPosts";
import HomePage from "@/modules/home/homePage";

const Home = () => {
  const { data: posts } = useGetPosts();

  return (
    <>
      <NextSeo title="Home" />

      <HomePage posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("posts", () => getPosts());

  return {
    props: { dehydratedState: dehydrate(queryClient) },
    revalidate: 1,
  };
};

export default Home;
