import React from "react";

import { Story, Meta } from "@storybook/react";

import Button from "../ui/button/Button";

import type { ButtonProps } from "../ui/button/Button.styles";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const All = () => (
  <>
    <Button>Button</Button>

    <Button variant="danger">Button</Button>
  </>
);

export const Sizes = () => (
  <>
    <Button size="lg">Button</Button>
    <Button>Button</Button>
    <Button size="sm">Button</Button>
  </>
);

export const Loading = () => <Button loading={true}>Loading</Button>;

export const WithLink = () => (
  <a
    href="https://octocake.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button>Button</Button>
  </a>
);
