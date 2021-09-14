import React from "react";

import { render, screen } from "@testing-library/react";

import Avatar from "@/ui/Avatar";

describe("Avatar", () => {
  const alt = "avatar";

  it("Should render an avatar", () => {
    render(<Avatar src="/logo.svg" width="50" height="50" alt={alt} />);

    expect(screen.getByAltText(alt)).toBeVisible();
  });
});
