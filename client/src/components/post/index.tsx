import React, { memo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

const PostMenu = dynamic(() => import("./PostMenu"));

import StyledAvatar from "@/ui/Avatar";

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
    <article className="bg-white relative p-[12px] mb-5 rounded-custom shadow-lg max-w-2xl">
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
            <h3 className="oc_text-base">
              <Link href={`/u/${githubUsername}`}>
                <a>{githubName}</a>
              </Link>
            </h3>

            <p className="text-sm text-gray-700">
              <time dateTime={createdAt}>{dayjs(createdAt).format("ll")}</time>
            </p>
          </div>
        </div>

        <PostMenu post={post} />
      </header>

      <div className="ml-[62px] mt-2">
        <h2 className="leading-normal oc_text-2xl">
          <Link href={`/p/${slug}`}>
            <a>{title}</a>
          </Link>
        </h2>

        <p className="text-gray-700 line-clamp-2">{description}</p>
      </div>
    </article>
  );
};

export default memo(Post);
