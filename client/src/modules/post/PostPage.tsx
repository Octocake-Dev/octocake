import React from "react";

import { NextSeo } from "next-seo";

import { baseUrl } from "@/lib/constants";

import type { IPost } from "@/types/post";

const PostPage = ({ post }: { post: IPost | undefined }) => {
  const { title, description, body, slug } = post || {};

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${baseUrl}/p/${slug}`}
      />

      <section className="min-h-screen text-center">
        <h1 className="px-8 oc_text-4xl">{title}</h1>

        <p className="px-16 text-lg text-gray-700">{description}</p>

        <p className="my-4 text-left">{body}</p>
      </section>
    </>
  );
};

export default PostPage;
