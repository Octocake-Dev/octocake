import React from "react";
import Link from "next/link";

import { Logo } from "@/components/Logo";

const LINKS = [
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Privacy policy", href: "/privacy" },
  { title: "Terms of use", href: "/terms" },
  { title: "Code of conduct", href: "/code-of-conduct" },
];

const Footer = () => (
  <footer className="flex flex-col items-center justify-center py-6 text-center oc_max_width">
    <div>
      <Link href="/">
        <a className="flex" aria-label="logo">
          <Logo />
        </a>
      </Link>
    </div>

    <div className="flex flex-col items-center py-4 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center">
      {LINKS.map(({ href, title }) => (
        <Link href={href} key={title}>
          <a className="font-medium sm:opacity-75 sm:hover:opacity-100 sm:hover:underline">
            {title}
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
          href="https://imadatyatalah.vercel.app/"
          className="font-medium text-primary-900 sm:hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Imad Atyat-Alah
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
