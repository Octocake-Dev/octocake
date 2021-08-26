import React from "react";

import Post from "@/components/post";

import { IPost } from "@/types/post";

const HomePage = ({ posts }: { posts: IPost[] | undefined }) => (
  <section className="px-5 py-2 sm:px-8 md:px-16 xl:px-28 custom_max_width">
    {posts?.length ? (
      <>
        <h4 className="text-2xl font-bold leading-none">Posts</h4>

        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </>
    ) : null}
  </section>
);

export default HomePage;
