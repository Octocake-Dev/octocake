import React, { Fragment } from "react";
import Link from "next/link";

import { Menu, Transition } from "@headlessui/react";
import { BsPerson } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import {
  IoLogOutOutline,
  IoSettingsOutline,
  IoHelpBuoyOutline,
} from "react-icons/io5";

import { apiBaseUrl } from "@/lib/constants";
import StyledAvatar from "@/components/avatar";
import MenuItem from "@/components/menuItem";

import { ISimpleUser } from "@/types/user";

const ProfileMenu = ({ user }: { user: ISimpleUser }) => {
  const { githubAvatarUrl, githubName, githubUsername } = user;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex">
          <StyledAvatar
            src={githubAvatarUrl}
            width="50"
            height="50"
            alt={githubName}
            title={githubName}
          />
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
            <Link href={`/u/${githubUsername}`} passHref>
              <MenuItem as="a">
                <BsPerson className="menu_item_icon" aria-hidden="true" />
                Profile
              </MenuItem>
            </Link>

            <Link href="/new-post" passHref>
              <MenuItem as="a">
                <HiOutlinePencilAlt
                  className="menu_item_icon"
                  aria-hidden="true"
                  opacity="85%"
                />
                New Post
              </MenuItem>
            </Link>
          </div>

          <div className="px-1 py-1">
            <Link href="/help" passHref>
              <MenuItem as="a">
                <IoHelpBuoyOutline
                  className="menu_item_icon"
                  aria-hidden="true"
                  opacity="85%"
                />
                Help
              </MenuItem>
            </Link>

            <Link href="/settings/profile" passHref>
              <MenuItem as="a">
                <IoSettingsOutline
                  className="menu_item_icon"
                  aria-hidden="true"
                />
                Settings
              </MenuItem>
            </Link>
          </div>

          <div className="px-1 py-1">
            <a href={`${apiBaseUrl}/auth/github/logout`}>
              <MenuItem warning>
                <IoLogOutOutline
                  className="menu_item_icon"
                  aria-hidden="true"
                />
                Logout
              </MenuItem>
            </a>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileMenu;
