import React from "react";

import Post from "@/components/post";

import { IPost } from "@/types/post";

const Posts = ({ posts }: { posts: IPost[] | undefined }) => (
  <>
    {posts?.length ? (
      <>
        <h1 className="text-2xl font-semibold leading-relaxed tracking-normal">
          Posts
        </h1>

        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </>
    ) : null}
  </>
);

export default Posts;
