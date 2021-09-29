import { red } from "tailwindcss/colors";
import { variant } from "styled-system";
import styled from "styled-components";

export type ButtonProps = {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "danger";
  loading?: boolean;
};

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  display: inline-flex;
  align-items: center;

  ${({ loading }) => loading && `pointer-events: none; opacity: 80%;`};

  :hover,
  :focus {
    transition-duration: 250ms;
  }

  ${variant({
    prop: "variant",
    variants: {
      primary: {
        color: "white",
        backgroundColor: "var(--color-primary-500)",

        ":hover": {
          backgroundColor: "var(--color-primary-600)",
        },
        ":focus": {
          backgroundColor: "var(--color-primary-600)",
          boxShadow: `0px 0px 0px 4px rgba(53,143,128,0.4)`,
        },
      },

      danger: {
        color: "white",
        backgroundColor: red[500],

        ":hover": {
          backgroundColor: red[600],
        },
        ":focus": {
          backgroundColor: red[600],
          boxShadow: `0px 0px 0px 4px rgba(220,38,38,0.4)`,
        },
      },
    },
  })}

  ${variant({
    prop: "size",
    variants: {
      sm: {
        fontSize: "14px",
        padding: "10px 20px",
      },

      md: {
        fontSize: "16px",
        padding: "12px 22px",
      },

      lg: {
        fontSize: "18px",
        padding: "14px 24px",
      },
    },
  })}
`;

export default StyledButton;
