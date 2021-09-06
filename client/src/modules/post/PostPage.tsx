import React from "react";

import { IPost } from "@/types/post";

const PostPage = ({ post }: { post: IPost | undefined }) => {
  const { title, description } = post || {};

  return (
    <section className="min-h-screen text-center">
      <h1 className="px-8 oc_text-4xl">{title}</h1>

      <p className="px-16 text-lg text-gray-700">{description}</p>
    </section>
  );
};

export default PostPage;
