import { create } from "@storybook/theming";
import { theme } from "../src";
import logo from "../.github/assets/banner.svg";

export default create({
  base: "dark",

  colorPrimary: theme.colors.primary[500],
  colorSecondary: theme.colors.primary[500],

  // UI
  appBg: theme.colors.gray[900], // gray/900
  appContentBg: theme.colors.gray[800], // gray/800
  appBorderColor: theme.colors.gray[500], // gray/500
  appBorderRadius: 4,

  // Typography
  fontBase: '"Inter", "Open Sans", sans-serif',
  fontCode: '"JetBrains Mono", monospace',

  // Text colors
  textColor: theme.colors.gray[50], // gray/050
  textInverseColor: theme.colors.gray[800], //gray/800

  // Toolbar default and active colors
  barBg: theme.colors.gray[800], // gray/800
  barTextColor: theme.colors.gray[200], // gray/100
  barSelectedColor: theme.colors.gray[100], //gray/700

  // Form colors
  inputBg: theme.colors.gray[700],
  inputBorder: theme.colors.gray[500],
  inputTextColor: theme.colors.gray[100],
  inputBorderRadius: 4,

  brandTitle: "Nest UI",
  brandUrl: "https://ui.nest.land",
  brandImage: logo,
});
