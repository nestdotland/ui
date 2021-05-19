import NestTheme from './theme'
const tailwindColors = require('tailwindcss/colors')
import '../style/output.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: NestTheme,
  },
  backgrounds: {
    default: 'twitter',
    values: [
      {
        name: 'gray/900',
        value: tailwindColors.coolGray[900],
      },
      {
        name: 'gray/800',
        value: tailwindColors.coolGray[800],
      },
    ],
  },
}
