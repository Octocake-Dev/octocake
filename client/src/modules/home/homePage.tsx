import React from "react";

import Posts from "@/components/posts";

import { IPost } from "@/types/post";

const HomePage = ({ posts }: { posts: IPost[] | undefined }) => (
  <section className="px-5 py-2 sm:px-8 md:px-16 xl:px-28 custom_max_width">
    <Posts posts={posts} />
  </section>
);

export default HomePage;
