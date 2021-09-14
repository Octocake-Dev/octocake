import React from "react";

import { render, screen } from "@testing-library/react";

import Button from "@/ui/button/Button";

describe("Button", () => {
  it("Should render a button with Click me text", () => {
    render(<Button>Click me</Button>);

    expect(screen.getByText("Click me")).toBeVisible();
  });
});
