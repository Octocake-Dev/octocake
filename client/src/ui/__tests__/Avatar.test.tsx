import React from "react";

import { render, screen } from "@testing-library/react";

import Avatar from "@/ui/Avatar";

describe("Avatar", () => {
  const alt = "avatar";

  const Component = <Avatar src="/logo.svg" width="50" height="50" alt={alt} />;

  it("Should render an avatar", () => {
    render(Component);

    expect(screen.getByAltText(alt)).toBeVisible();
  });

  it("Should match snapshot", () => {
    render(Component);

    expect(screen.getByAltText(alt)).toMatchSnapshot();
  });
});
