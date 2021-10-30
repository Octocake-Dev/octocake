import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const ProfileMenu = dynamic(() => import("./ProfileMenu"), {
  loading: () => (
    <div className="h-[50px] w-[50px] bg-primary-300 rounded-custom" />
  ),
});

import { LogoWithName } from "@/components/Logo";
import { apiBaseUrl } from "@/lib/constants";
import { useUser } from "@/stores/useUser";
import Button from "@/ui/button/Button";

import { ISimpleUser } from "@/types/user";

const Header = () => {
  const [user, setUser] = useState<ISimpleUser | null>(null);

  const currentUser = useUser((state) => state.user);

  useEffect(() => setUser(currentUser), [currentUser]);

  return (
    <header className="flex items-center justify-between h-[70px] px-5 xl:px-14 oc_max_width">
      <div>
        <Link href="/">
          <a className="flex items-end" aria-label="logo">
            <LogoWithName />
            <sup className="font-semibold text-primary-900">Alpha</sup>
          </a>
        </Link>
      </div>

      {user ? (
        <div className="flex items-center">
          <Link href="/new-post">
            <a className="hidden mr-8 sm:block">
              <Button size="sm" type="button">
                New Post
              </Button>
            </a>
          </Link>

          <ProfileMenu user={user} />
        </div>
      ) : (
        <div>
          <a href={`${apiBaseUrl}/auth/github`}>
            <Button size="sm" type="button">
              Sign in
            </Button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
