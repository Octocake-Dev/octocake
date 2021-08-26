import React, { memo } from "react";
import Link from "next/link";

import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

import StyledAvatar from "@/components/avatar";
import PostMenu from "./postMenu";

import { IPost } from "@/types/post";

dayjs.extend(LocalizedFormat);

const Post = ({ post }: { post: IPost }) => {
  const {
    createdAt,
    title,
    slug,
    description,
    owner: { githubUsername, githubAvatarUrl, githubName },
  } = post;

  return (
    <article className="bg-white relative p-[12px] my-5 rounded-custom shadow-lg max-w-2xl">
      <header className="flex justify-between">
        <div className="flex">
          <Link href={`/u/${githubUsername}`}>
            <a className="flex">
              <StyledAvatar
                src={githubAvatarUrl}
                width="50"
                height="50"
                alt={githubName}
                title={githubName}
              />
            </a>
          </Link>

          <div className="ml-3 space-y-1">
            <h3 className="font-medium">
              <Link href={`/u/${githubUsername}`}>
                <a>{githubName}</a>
              </Link>
            </h3>

            <p className="text-gray-700 text-sm">
              {dayjs(createdAt).format("ll")}
            </p>
          </div>
        </div>

        <PostMenu post={post} />
      </header>

      <div className="ml-[62px] mt-2">
        <h2 className="text-2xl font-bold">
          <Link href={`/p/${slug}`}>
            <a>{title}</a>
          </Link>
        </h2>

        <p className="text-gray-700">{description}</p>
      </div>
    </article>
  );
};

export default memo(Post);
