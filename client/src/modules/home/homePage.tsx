import React from "react";

import Posts from "@/components/posts";

import { IPost } from "@/types/post";

const HomePage = ({ posts }: { posts: IPost[] | undefined }) => (
  <section>
    <Posts posts={posts} />
  </section>
);

export default HomePage;
