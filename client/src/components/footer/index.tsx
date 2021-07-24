import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/logo.svg";

const LINKS = [
  { title: "About", href: "/#" },
  { title: "Contact", href: "/#" },
  { title: "Privacy policy", href: "/#" },
  { title: "Terms of use", href: "/#" },
  { title: "Code of conduct", href: "/#" },
];

const Footer = () => {
  return (
    <>
      <footer className="custom_max_width py-6 flex flex-col items-center justify-center text-center">
        <div>
          <Link href="/">
            <a className="flex">
              <Image src={Logo} alt="octocake logo" />
            </a>
          </Link>
        </div>

        <div className="py-4 flex items-center flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center">
          {LINKS.map((link, index) => (
            <Link href={link.href} key={index}>
              <a className="font-medium sm:opacity-75 sm:hover:opacity-100 sm:hover:underline">
                {link.title}
              </a>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center text-center">
          <p>
            Made with
            <span role="img" aria-label="red heart">
              {" "}
              ❤️{" "}
            </span>
            by{" "}
            <a
              href="https://github.com/imadatyatalah/"
              className="text-primary-900 font-medium sm:hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Imad Atyat-Alah
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
