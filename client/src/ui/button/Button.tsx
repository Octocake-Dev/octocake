import React from "react";

import { ImSpinner2 } from "react-icons/im";

import StyledButton, { ButtonProps } from "./Button.styles";

const Button = ({
  children,
  disabled,
  loading,
  ...rest
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <StyledButton loading={loading} disabled={disabled || loading} {...rest}>
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
