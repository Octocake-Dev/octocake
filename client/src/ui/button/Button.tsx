import React from "react";

import { ImSpinner2 } from "react-icons/im";

import StyledButton from "./Button.styles";

import type { ButtonProps } from "@/types/Button";

const Button = ({ children, disabled, loading, ...rest }: ButtonProps) => (
  <StyledButton disabled={disabled || loading} {...rest}>
    {children}

    {loading && (
      <span className="ml-2">
        <ImSpinner2 className="animate-spin" />
      </span>
    )}
  </StyledButton>
);

Button.defaultProps = { size: "md", variant: "primary" };

export default Button;
