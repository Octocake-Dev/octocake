import React, { Fragment } from "react";
import Link from "next/link";

import { Menu, Transition } from "@headlessui/react";
import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiBlock } from "react-icons/bi";
import { MdReport, MdContentCopy } from "react-icons/md";
import useClipboard from "react-use-clipboard";

import { useUser } from "@/stores/useUser";
import useDeletePost from "@/hooks/useDeletePost";
import MenuItem from "@/components/menuItem";

import { baseUrl } from "@/lib/constants";
import { TPost } from "@/types/post";

const PostMenu = ({ post }: { post: TPost }) => {
  const user = useUser((state) => state.user);

  const { slug, owner } = post;

  const [isCopied, setCopied] = useClipboard(`${baseUrl}/p/${slug}`, {
    successDuration: 4000,
  });

  const { mutate: deletePost } = useDeletePost(slug);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex">
          <FiMoreHorizontal className="w-5 h-5 mr-1" />
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
        <Menu.Items className="z-50 absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <MenuItem disabled={isCopied} onClick={setCopied}>
              <MdContentCopy className="w-5 h-5 mr-1" aria-hidden="true" />
              {isCopied ? "Copied to Clipboard" : "Copy post URL"}
            </MenuItem>

            {user &&
              (owner.githubId === user?.githubId ? (
                <>
                  <Link href={`/p/${slug}/edit`}>
                    <a>
                      <MenuItem>
                        <HiOutlinePencilAlt
                          className="w-5 h-5 mr-1"
                          aria-hidden="true"
                        />
                        Edit post
                      </MenuItem>
                    </a>
                  </Link>

                  <MenuItem warning onClick={() => deletePost()}>
                    <HiOutlineTrash
                      className="w-5 h-5 mr-1"
                      aria-hidden="true"
                    />
                    Delete Post
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem warning>
                    <BiBlock className="w-5 h-5 mr-1" aria-hidden="true" />
                    Block @{owner.githubUsername}
                  </MenuItem>

                  <MenuItem warning>
                    <MdReport className="w-5 h-5 mr-1" aria-hidden="true" />
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
