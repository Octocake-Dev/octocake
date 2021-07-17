import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useUser } from "@/stores/useUser";
import ProfileMenu from "./ProfileMenu";

import desktopLogo from "../../../public/desktop-logo.svg";

const Header = () => {
  const user = useUser((state) => state.user);
  const logged_in = useUser((state) => state.logged_in);

  return (
    <>
      <header className="flex items-center justify-between shadow-lg h-[70px] px-5 sm:px-8 md:px-16 xl:px-28 custom_max_width">
        <div>
          <Link href="/">
            <a>
              <Image src={desktopLogo} alt="octocake logo" />
            </a>
          </Link>
        </div>

        <div className="flex items-center">
          {logged_in && user ? (
            <>
              <ProfileMenu user={user} />
            </>
          ) : (
            <>
              <a href="http://localhost:1337/auth/github">
                <button className="text-white font-semibold bg-primary-400 rounded-[10px] py-2 px-4">
                  Sign in
                </button>
              </a>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
