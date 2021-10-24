import React from "react";

import { NextSeo } from "next-seo";

import Posts from "@/components/Posts";
import { baseUrl } from "@/lib/constants";

import type { IPost } from "@/types/post";

const HomePage = ({ posts }: { posts: IPost[] | undefined }) => (
  <>
    <NextSeo title="Home" canonical={baseUrl} />

    <section className="md:grid md:gap-x-2 md:grid-cols-[0.75fr,2fr] lg:grid-cols-[0.75fr,2fr,0.75fr]">
      <aside className="hidden md:block" />
      <Posts posts={posts} />
      <aside className="hidden lg:block" />
    </section>
  </>
);

export default HomePage;
