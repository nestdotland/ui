import { create } from '@storybook/theming'
const tailwindColors = require('tailwindcss/colors')

export default create({
  base: 'dark',

  colorPrimary: tailwindColors.indigo[500],
  colorSecondary: tailwindColors.indigo[500],

  // UI
  appBg: tailwindColors.coolGray[900], // gray/900
  appContentBg: tailwindColors.coolGray[800], // gray/800
  appBorderColor: tailwindColors.coolGray[500], // gray/500
  appBorderRadius: 4,

  // Typography
  fontBase: '"Inter", "Open Sans", sans-serif',
  fontCode: '"JetBrains Mono", monospace',

  // Text colors
  textColor: tailwindColors.coolGray[50], // gray/050
  textInverseColor: tailwindColors.coolGray[800], //gray/800

  // Toolbar default and active colors
  barBg: tailwindColors.coolGray[800], // gray/800
  barTextColor: tailwindColors.coolGray[200], // gray/100
  barSelectedColor: tailwindColors.coolGray[100], //gray/700

  // Form colors
  inputBg: tailwindColors.coolGray[700],
  inputBorder: tailwindColors.coolGray[500],
  inputTextColor: tailwindColors.coolGray[100],
  inputBorderRadius: 4,

  brandTitle: 'Nest UI',
  brandUrl: 'https://ui.nest.land',
  brandImage: 'https://avatars.githubusercontent.com/u/65864058?s=36&v=4',
})
