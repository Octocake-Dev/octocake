import React from "react";

import { render, screen } from "@testing-library/react";

import Button from "@/ui/button/Button";

describe("Button", () => {
  const text = "Click me";

  it(`Should render a button with ${text} text`, () => {
    render(<Button>{text}</Button>);

    expect(screen.getByText(text)).toBeVisible();
  });

  it("Should render a disabled button if disabled prop is passed", () => {
    render(<Button disabled>{text}</Button>);

    expect(screen.getByText(text)).toBeDisabled();
  });

  it("Should render a disabled button if loading prop is passed", () => {
    render(<Button loading>{text}</Button>);

    expect(screen.getByText(text)).toBeDisabled();
  });

  it("Should match snapshot", () => {
    render(<Button>{text}</Button>);

    expect(screen.getByText(text)).toMatchSnapshot();
  });
});
