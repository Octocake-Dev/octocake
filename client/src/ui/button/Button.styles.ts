import { red } from "tailwindcss/colors";
import { styled } from "../../../stitches.config";

const StyledButton = styled("button", {
  cursor: "pointer",
  fontFamily: "inherit",
  fontWeight: 600,
  borderRadius: "10px",
  border: "none",
  display: "inline-flex",
  alignItems: "center",

  "&:hover, &:focus": {
    transitionDuration: "250ms",
  },
  "&:disabled": {
    pointerEvents: "none",
    opacity: "80%",
  },

  variants: {
    variant: {
      primary: {
        color: "white",
        backgroundColor: "$primary500",

        "&:hover": {
          backgroundColor: "$primary600",
        },
        "&:focus": {
          backgroundColor: "$primary600",
          boxShadow: `0px 0px 0px 4px rgba(53,143,128,0.4)`,
        },
      },
      danger: {
        color: "white",
        backgroundColor: red[500],

        "&:hover": {
          backgroundColor: red[600],
        },
        "&:focus": {
          backgroundColor: red[600],
          boxShadow: `0px 0px 0px 4px rgba(220,38,38,0.4)`,
        },
      },
    },

    size: {
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
  },
});

export default StyledButton;
