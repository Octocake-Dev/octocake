import React from "react";

import Posts from "@/components/Posts";

import { IPost } from "@/types/post";

const HomePage = ({ posts }: { posts: IPost[] | undefined }) => (
  <section className="md:grid md:gap-x-2 md:grid-cols-[0.75fr,2fr] lg:grid-cols-[0.75fr,2fr,0.75fr]">
    <aside className="hidden text-center text-white bg-primary-500 md:block">
      Octocake
    </aside>
    <Posts posts={posts} />
    <aside className="hidden text-center text-white bg-primary-500 lg:block">
      Octocake
    </aside>
  </section>
);

export default HomePage;
