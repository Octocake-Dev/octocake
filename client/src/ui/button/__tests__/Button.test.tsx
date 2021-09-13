/**
 * @jest-environment jsdom
 */
import React from "react";

import { render } from "@testing-library/react";

import Button from "@/ui/button/Button";

describe("Button", () => {
  it("should render a button with Click me text", () => {
    const { getByText } = render(<Button>Click me</Button>);

    const text = getByText("Click me");

    expect(text).toBeVisible();
  });
});
