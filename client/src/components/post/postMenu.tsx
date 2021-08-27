import React, { Fragment } from "react";
import Link from "next/link";

import { Menu, Transition } from "@headlessui/react";
import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiBlock } from "react-icons/bi";
import { MdReport, MdContentCopy } from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";
import useClipboard from "react-use-clipboard";

import { baseUrl } from "@/lib/constants";
import { useIsFollowed } from "@/api/user/getUser";
import { useUser } from "@/stores/useUser";
import useDeletePost from "@/hooks/useDeletePost";
import useFollow from "@/hooks/useFollow";
import MenuItem from "@/components/menuItem";

import { IPost } from "@/types/post";

const PostMenu = ({ post }: { post: IPost }) => {
  const user = useUser((state) => state.user);

  const { slug, owner } = post;

  const [isCopied, setCopied] = useClipboard(`${baseUrl}/p/${slug}`, {
    successDuration: 4000,
  });

  const { mutate: deletePost } = useDeletePost(slug);
  const { mutate: toggleFollow } = useFollow(owner.githubUsername);
  const { data: isFollowed, isLoading } = useIsFollowed(
    owner.githubUsername as string
  );

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex" aria-label="more">
          <FiMoreHorizontal className="w-5 h-5" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-50 absolute right-0 w-64 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <MenuItem disabled={isCopied} onClick={setCopied}>
              <MdContentCopy className="menu_item_icon" aria-hidden="true" />
              {isCopied ? "Copied to Clipboard" : "Copy post URL"}
            </MenuItem>

            {user &&
              (owner.id === user.id ? (
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

                  <MenuItem warning onClick={() => deletePost()}>
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
                      className="menu_item_icon"
                      aria-hidden="true"
                    />
                    {isFollowed?.followedBy.length ? "UnFollow" : "Follow"} @
                    {owner.githubUsername}
                  </MenuItem>

                  <MenuItem warning>
                    <BiBlock className="menu_item_icon" aria-hidden="true" />
                    Block @{owner.githubUsername}
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
