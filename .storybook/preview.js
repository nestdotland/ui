import NestTheme from './theme'
const tailwindColors = require('tailwindcss/colors')
import '../style/output.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: NestTheme,
  },
  backgrounds: {
    values: [
      {
        name: 'gray/900',
        value: tailwindColors.coolGray[900],
      },
      {
        name: 'gray/800',
        value: tailwindColors.coolGray[800],
      },
      {
        name: 'gray/700',
        value: tailwindColors.coolGray[700],
      },
      {
        name: 'gray/600',
        value: tailwindColors.coolGray[600],
      },
      {
        name: 'gray/500',
        value: tailwindColors.coolGray[500],
      },
      {
        name: 'gray/400',
        value: tailwindColors.coolGray[400],
      },
      {
        name: 'gray/300',
        value: tailwindColors.coolGray[300],
      },
      {
        name: 'gray/200',
        value: tailwindColors.coolGray[200],
      },
      {
        name: 'gray/100',
        value: tailwindColors.coolGray[100],
      },
      {
        name: 'gray/050',
        value: tailwindColors.coolGray[50],
      },
    ],
  },
}
