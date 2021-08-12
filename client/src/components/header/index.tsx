import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "octocake-ui";

import { apiBaseUrl } from "@/lib/constants";
import WithUser from "@/hocs/withUser";
import ProfileMenu from "./ProfileMenu";

import { User } from "@/types/user";
import Logo from "@/public/desktop-logo.svg";

const Header = ({ user }: { user: User }) => (
  <header className="flex items-center justify-between shadow-lg h-[70px] px-5 sm:px-8 md:px-16 xl:px-28 custom_max_width">
    <div>
      <Link href="/">
        <a className="flex">
          <Image src={Logo} alt="octocake logo" />
        </a>
      </Link>
    </div>

    <div className="flex items-center">
      {user ? (
        <>
          <Link href="/new-post">
            <a className="mr-8">
              <Button size="sm" type="button">
                Create Post
              </Button>
            </a>
          </Link>

          <ProfileMenu user={user} />
        </>
      ) : (
        <a href={`${apiBaseUrl}/auth/github`}>
          <Button size="sm" type="button">
            Sign in
          </Button>
        </a>
      )}
    </div>
  </header>
);

export default WithUser(Header);
