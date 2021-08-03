import React from "react";
import Link from "next/link";

import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

import StyledAvatar from "@/components/avatar";
import PostMenu from "./postMenu";

import { TPost } from "@/types/post";

dayjs.extend(LocalizedFormat);

const Post = ({ post }: { post: TPost }) => {
  const { owner } = post;

  return (
    <article className="bg-white relative p-[12px] my-5 rounded-[10px] shadow-lg max-w-2xl">
      <header className="flex justify-between">
        <div className="flex">
          <Link href={`/u/${owner.githubUsername}`}>
            <a className="flex">
              <StyledAvatar
                src={owner.githubAvatarUrl}
                width="50"
                height="50"
                alt={owner.githubName}
                title={owner.githubName}
              />
            </a>
          </Link>

          <div className="ml-3 space-y-1">
            <h3 className="font-medium">
              <Link href={`/u/${owner.githubUsername}`}>
                <a>{owner.githubName}</a>
              </Link>
            </h3>

            <p className="text-gray-800 text-sm">
              {dayjs(post.createdAt).format("ll")}
            </p>
          </div>
        </div>

        <PostMenu post={post} />
      </header>

      <div className="ml-[62px] mt-2">
        <h2 className="text-2xl font-bold">
          <Link href={`/p/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </h2>

        <p>{post.description}</p>
      </div>
    </article>
  );
};

export default Post;
