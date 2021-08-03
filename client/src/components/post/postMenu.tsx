import React, { Fragment } from "react";
import Link from "next/link";

import { Menu, Transition } from "@headlessui/react";
import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiBlock } from "react-icons/bi";
import { MdReport } from "react-icons/md";

import { useUser } from "@/stores/useUser";
import useDeletePost from "@/hooks/useDeletePost";
import MenuItem from "@/components/menuItem";

import { TPost } from "@/types/post";

const PostMenu = ({ post }: { post: TPost }) => {
  const user = useUser((state) => state.user);
  const oc_token = useUser((state) => state.oc_token);

  const { mutate: deletePost } = useDeletePost(post.slug, String(oc_token));

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
            {post.owner.githubId === user?.githubId ? (
              <>
                <Link href={`/p/${post.slug}/edit`}>
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

                <MenuItem onClick={() => deletePost()}>
                  <HiOutlineTrash className="w-5 h-5 mr-1" aria-hidden="true" />
                  Delete Post
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem>
                  <BiBlock size="20" className="mr-2" />
                  Block @{post.owner.githubUsername}
                </MenuItem>

                <MenuItem>
                  <MdReport size="20" className="mr-2" />
                  Report Post
                </MenuItem>
              </>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default PostMenu;
