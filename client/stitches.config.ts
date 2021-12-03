import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary50: "var(--color-primary-50)",
      primary100: "var(--color-primary-100)",
      primary200: "var(--color-primary-200)",
      primary300: "var(--color-primary-300)",
      primary400: "var(--color-primary-400)",
      primary500: "var(--color-primary-500)",
      primary600: "var(--color-primary-600)",
      primary700: "var(--color-primary-700)",
      primary800: "var(--color-primary-800)",
      primary900: "var(--color-primary-900)",
    },
  },
});
