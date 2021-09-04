import React from "react";

import { Story, Meta } from "@storybook/react";

import ButtonComponent, { ButtonProps } from "../ui/button/Button";

export default {
  title: "Components/Button",
  component: ButtonComponent,
} as Meta;

const Template: Story<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = (args) => <ButtonComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const All = () => (
  <>
    <ButtonComponent>Button</ButtonComponent>

    <ButtonComponent variant="danger">Button</ButtonComponent>
  </>
);

export const Sizes = () => (
  <>
    <ButtonComponent size="lg">Button</ButtonComponent>
    <ButtonComponent>Button</ButtonComponent>
    <ButtonComponent size="sm">Button</ButtonComponent>
  </>
);

export const WithLink = () => (
  <a
    href="https://octocake.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <ButtonComponent>Button</ButtonComponent>
  </a>
);
