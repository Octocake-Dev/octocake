import React from "react";

import Post from "@/components/post";

import type { IPost } from "@/types/post";

const Posts = ({ posts }: { posts: IPost[] | undefined }) => (
  <>
    {posts?.length ? (
      <div>
        <h1 className="oc_text-2xl">Posts</h1>

        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    ) : null}
  </>
);

export default Posts;
