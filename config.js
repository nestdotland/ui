const deepMerge = require('deepmerge')
const customFormsPlugin = require('@tailwindcss/forms')
const tailwindColors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

const colors = {
  transparent: 'transparent',
  white: tailwindColors.white,
  black: tailwindColors.black,
  gray: tailwindColors.coolGray,
  red: tailwindColors.rose,
  orange: tailwindColors.orange,
  yellow: tailwindColors.yellow,
  green: tailwindColors.emerald,
  teal: tailwindColors.teal,
  blue: tailwindColors.cyan,
  // indigo: tailwindColors.indigo,
  purple: tailwindColors.indigo,
  // pink: tailwindColors.pink,
}

const backgroundOpacity = (theme) => ({
  10: '0.1',
  ...theme('opacity'),
})

const maxHeight = (theme) => ({
  0: '0',
  xl: '36rem',
  ...theme('spacing'),
})

const NestUIConfig = {
  darkMode: 'class',
  purge: {
    content: ['node_modules/@nestdotland/ui/lib/defaultTheme.js', 'node_modules/@nestdotland/ui/dist/index.js'],
  },
  theme: {
    colors,
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        mono: ['JetBrains Mono', ...fontFamily.mono],
      },
    },
    backgroundOpacity,
    maxHeight,
  },
  variants: {
    backgroundOpacity: ['responsive', 'hover', 'focus', 'dark'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'odd', 'dark'],
    display: ['responsive', 'dark'],
    textColor: ['responsive', 'focus', 'focus-within', 'hover', 'active', 'dark'],
    placeholderColor: ['responsive', 'focus', 'dark'],
    borderColor: ['responsive', 'hover', 'focus', 'dark'],
    divideColor: ['responsive', 'dark'],
    boxShadow: ['responsive', 'hover', 'focus', 'dark'],
    margin: ['responsive', 'last'],
  },
  plugins: [customFormsPlugin],
}

function arrayMergeFn(destinationArray, sourceArray) {
  return destinationArray.concat(sourceArray).reduce((acc, cur) => {
    if (acc.includes(cur)) return acc
    return [...acc, cur]
  }, [])
}

/**
 * Merge NestUI and Tailwind CSS configurations
 * @param {object} tailwindConfig - Tailwind config object
 * @return {object} new config object
 */
function wrapper(tailwindConfig) {
  let purge
  if (Array.isArray(tailwindConfig.purge)) {
    purge = {
      content: tailwindConfig.purge,
    }
  } else {
    purge = tailwindConfig.purge
  }
  return deepMerge({ ...tailwindConfig, purge }, NestUIConfig, { arrayMerge: arrayMergeFn })
}

module.exports = wrapper
