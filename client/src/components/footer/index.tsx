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

        <div className="py-4 flex items-center flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 md:justify-center">
          {LINKS.map((link, index) => (
            <Link href={link.href} key={index}>
              <a className="font-medium md:opacity-75 md:hover:opacity-100 md:hover:underline">
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
              className="text-primary-500 font-medium md:hover:underline"
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
