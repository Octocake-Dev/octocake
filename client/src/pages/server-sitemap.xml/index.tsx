import { GetServerSideProps } from "next";

import { getServerSideSitemap } from "next-sitemap";

import { instance } from "@/lib/axios";

import { IPost } from "@/types/post";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data: posts } = await instance.get<IPost[]>("/posts");

  const fields: {
    loc: string;
    lastmod: string;
    changefreq: string;
    priority: number;
  }[] = [];

  posts.forEach((post) =>
    fields.push({
      loc: `https://octocake.netlify.app/p/${post.slug}`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    })
  );

  return getServerSideSitemap(ctx, fields);
};

/* eslint-disable import/no-anonymous-default-export */
export default () => {};
