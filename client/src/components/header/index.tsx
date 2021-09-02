import React, { useState, useEffect } from "react";
import Link from "next/link";

import { LogoWithName } from "@/components/Logo";
import { apiBaseUrl } from "@/lib/constants";
import { useUser } from "@/stores/useUser";
import Button from "@/ui/button/Button";
import ProfileMenu from "./ProfileMenu";

import { ISimpleUser } from "@/types/user";

const Header = () => {
  const [user, setUser] = useState<ISimpleUser | null>(null);
  const currentUser = useUser((state) => state.user);

  useEffect(() => setUser(currentUser), [currentUser]);

  return (
    <header className="flex items-center justify-between h-[70px] px-5 sm:px-8 md:px-16 xl:px-28 custom_max_width">
      <div>
        <Link href="/">
          <a className="flex items-end" aria-label="logo">
            <LogoWithName />
            <sup className="font-semibold text-primary-900">Alpha</sup>
          </a>
        </Link>
      </div>

      <div className="flex items-center">
        {user ? (
          <>
            <Link href="/new-post">
              <a className="hidden mr-8 sm:block">
                <Button size="sm" type="button">
                  New Post
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
};

export default Header;
