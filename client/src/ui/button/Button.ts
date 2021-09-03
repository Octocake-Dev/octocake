import { red } from "tailwindcss/colors";
import { variant } from "styled-system";
import styled from "styled-components";

type ButtonProps = {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "danger";
};

const Button = styled("button")<ButtonProps>(
  {
    cursor: "pointer",
    transition: "250ms ease-in-out",
    fontFamily: "inherit",
    fontWeight: 600,
    borderRadius: "10px",
  },

  () =>
    variant({
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
    }),

  variant({
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
  })
);

Button.defaultProps = { size: "md", variant: "primary" };

export default Button;
