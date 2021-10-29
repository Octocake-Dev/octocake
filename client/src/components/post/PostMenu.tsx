import React, { useMemo } from "react";
import Link from "next/link";

import { Menu } from "@headlessui/react";
import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiBlock } from "react-icons/bi";
import { MdReport, MdContentCopy } from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";

import { useCopyClipboard, useDeletePost, useFollow } from "@/hooks/index";
import { checkIsFollowed } from "@/utils/checkIsFollowed";
import { baseUrl } from "@/lib/constants";
import { useUser } from "@/stores/useUser";
import MenuItem from "@/components/MenuItem";
import Transition from "@/ui/Transition";

import type { IPost } from "@/types/post";

const PostMenu = ({ post }: { post: IPost }) => {
  const currentUser = useUser((state) => state.user);

  const { slug, owner } = post;

  const [isCopied, setCopied] = useCopyClipboard(`${baseUrl}/p/${slug}`, {
    successDuration: 4000,
  });

  const { mutate: deletePost } = useDeletePost();
  const { mutate: toggleFollow, isLoading } = useFollow(owner.githubUsername);

  const isPostOwner = owner.id === currentUser?.id;

  const isFollowed = useMemo(
    () => checkIsFollowed(post.owner.followedBy, currentUser?.id),
    [currentUser?.id, post.owner.followedBy]
  );

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex" aria-label="more">
          <FiMoreHorizontal className="w-5 h-5" />
        </Menu.Button>
      </div>

      <Transition>
        <Menu.Items className="w-64 oc_menu_items">
          <div className="px-1 py-1">
            <MenuItem disabled={isCopied} onClick={setCopied}>
              <MdContentCopy className="menu_item_icon" aria-hidden="true" />
              {isCopied ? "Copied to Clipboard" : "Copy post URL"}
            </MenuItem>

            {currentUser &&
              (isPostOwner ? (
                <>
                  <Link href={`/p/${slug}/edit`} passHref>
                    <MenuItem as="a">
                      <HiOutlinePencil
                        className="menu_item_icon"
                        aria-hidden="true"
                      />
                      Edit post
                    </MenuItem>
                  </Link>

                  <MenuItem warning onClick={() => deletePost(slug)}>
                    <HiOutlineTrash
                      className="menu_item_icon"
                      aria-hidden="true"
                    />
                    Delete Post
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem disabled={isLoading} onClick={() => toggleFollow()}>
                    <BsPersonPlus
                      className="absolute menu_item_icon"
                      aria-hidden="true"
                    />
                    <span className="ml-6 truncate">
                      {isFollowed?.length ? "UnFollow" : "Follow"} @
                      {owner.githubUsername}
                    </span>
                  </MenuItem>

                  <MenuItem warning>
                    <BiBlock
                      className="absolute menu_item_icon"
                      aria-hidden="true"
                    />
                    <span className="ml-6 truncate">
                      Block @{owner.githubUsername}
                    </span>
                  </MenuItem>

                  <MenuItem warning>
                    <MdReport className="menu_item_icon" aria-hidden="true" />
                    Report Post
                  </MenuItem>
                </>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default PostMenu;
