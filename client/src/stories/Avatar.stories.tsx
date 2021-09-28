import React from "react";

import { Meta } from "@storybook/react";

import StyledAvatar from "../ui/Avatar";

export default {
  title: "Components/Avatar",
  component: StyledAvatar,
} as Meta;

export const Avatar = () => (
  <StyledAvatar
    src="/logo.svg"
    width="50"
    height="50"
    alt="Octocake"
    title="Octocake"
  />
);
