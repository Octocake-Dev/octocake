import React from "react";

import {
  AiOutlineGithub,
  AiOutlineMedium,
  AiOutlineTwitter,
} from "react-icons/ai";
import { IoLogoStackoverflow } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";

import type { IUser } from "@/types/user";

interface Props {
  user?: IUser;
}

const SocialLinks = ({ user }: Props) => {
  const SOCIAL_LINKS = [
    { icon: AiOutlineGithub, link: user?.githubUrl },
    { icon: AiOutlineTwitter, link: user?.twitterUrl },
    { icon: AiOutlineMedium, link: user?.mediumUrl },
    { icon: IoLogoStackoverflow, link: user?.stackOverflowUrl },
    { icon: FiExternalLink, link: user?.websiteUrl },
  ];

  return (
    <div className="flex">
      {SOCIAL_LINKS.map(({ icon: Icon, link }, index) =>
        link ? (
          <a
            className="mx-1"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <Icon className="w-6 h-6 opacity-80 hover:opacity-100" />
          </a>
        ) : null
      )}
    </div>
  );
};

export default SocialLinks;
