import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

import { Menu, Transition } from "@headlessui/react";
import { BsPerson } from "react-icons/bs";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";

const ProfileMenu = ({ user }) => {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex">
            <Image
              src={user.githubAvatarUrl}
              width="50"
              height="50"
              alt={user.githubName}
              className="rounded-[10px]"
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
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Link href={`/u/${user.githubUsername}`}>
                <a>
                  <MenuItem>
                    <BsPerson className="w-5 h-5 mr-1" aria-hidden="true" />
                    Profile
                  </MenuItem>
                </a>
              </Link>
            </div>

            <div className="px-1 py-1">
              <Link href={`/settings`}>
                <a>
                  <MenuItem>
                    <IoSettingsOutline
                      className="w-5 h-5 mr-1"
                      aria-hidden="true"
                    />
                    Settings
                  </MenuItem>
                </a>
              </Link>
            </div>

            <div className="px-1 py-1">
              <a href="http://localhost:1337/auth/github/logout">
                <MenuItem>
                  <IoLogOutOutline
                    className="w-5 h-5 mr-1"
                    aria-hidden="true"
                  />
                  Logout
                </MenuItem>
              </a>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

const MenuItem = ({ children }) => {
  return (
    <>
      <Menu.Item>
        {({ active }) => (
          <button
            className={`${
              active ? "bg-primary-500 text-white" : "text-gray-900"
            } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
          >
            {children}
          </button>
        )}
      </Menu.Item>
    </>
  );
};

ProfileMenu.propTypes = {
  user: PropTypes.object.isRequired,
};

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProfileMenu;
