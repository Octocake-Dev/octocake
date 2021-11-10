import React, { memo } from "react";
import Link from "next/link";

import { Menu } from "@headlessui/react";
import { BsPerson } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RiDashboardLine } from "react-icons/ri";
import {
  IoLogOutOutline,
  IoSettingsOutline,
  IoHelpBuoyOutline,
} from "react-icons/io5";

import { apiBaseUrl } from "@/lib/constants";
import StyledAvatar from "@/ui/Avatar";
import MenuItem from "@/components/MenuItem";
import Transition from "@/ui/Transition";

import type { TCurrentUser } from "@/types/user";

const ProfileMenu = ({ user }: { user: TCurrentUser }) => {
  const { githubAvatarUrl, githubName, githubUsername } = user;

  const TOP_LINKS = [
    {
      title: "Profile",
      url: `/u/${githubUsername}`,
      icon: BsPerson,
    },
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: RiDashboardLine,
    },
    {
      title: "New Post",
      url: "/new-post",
      icon: HiOutlinePencilAlt,
    },
  ];

  const MIDDLE_LINKS = [
    {
      title: "Help",
      url: "/help",
      icon: IoHelpBuoyOutline,
    },
    {
      title: "Settings",
      url: "/settings/profile",
      icon: IoSettingsOutline,
    },
  ];

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

      <Transition>
        <Menu.Items className="w-56 oc_menu_items">
          <div className="px-1 py-1">
            {TOP_LINKS.map(({ title, url, icon: Icon }) => (
              <Link href={url} passHref key={title}>
                <MenuItem as="a">
                  <Icon className="menu_item_icon" aria-hidden="true" />
                  {title}
                </MenuItem>
              </Link>
            ))}
          </div>

          <div className="px-1 py-1">
            {MIDDLE_LINKS.map(({ title, url, icon: Icon }) => (
              <Link href={url} passHref key={title}>
                <MenuItem as="a">
                  <Icon className="menu_item_icon" aria-hidden="true" />
                  {title}
                </MenuItem>
              </Link>
            ))}
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

export default memo(ProfileMenu);
