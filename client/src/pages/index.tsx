import React from "react";
import { GetStaticProps } from "next";

import { dehydrate } from "react-query/hydration";
import { QueryClient } from "react-query";
import { NextSeo } from "next-seo";

import { getPosts, useGetPosts } from "@/api/posts/getPosts";
import Post from "@/components/post";

import { TPost } from "@/types/post";

const Home = () => {
  const { data: posts } = useGetPosts();

  return (
    <>
      <NextSeo title="Home - Octocake" />

      <section className="px-5 py-2 bg-gray-100 sm:px-8 md:px-16 xl:px-28 custom_max_width">
        {posts?.length ? (
          <>
            <h4 className="text-xl font-bold leading-none">Posts</h4>

            {posts.map((post: TPost) => (
              <Post post={post} key={post.id} />
            ))}
          </>
        ) : null}
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery("posts", () => getPosts());

  return {
    props: { dehydratedState: dehydrate(queryClient) },
    revalidate: 1,
  };
};

export default Home;
