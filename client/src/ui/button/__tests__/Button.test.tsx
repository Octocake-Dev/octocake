/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen } from "@testing-library/react";

import Button from "@/ui/button/Button";

describe("Button", () => {
  it("should render a button with Click me text", () => {
    render(<Button>Click me</Button>);

    const text = screen.getByText("Click me");

    expect(text).toBeVisible();
  });
});
