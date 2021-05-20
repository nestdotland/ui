export default {
  // Alert
  alert: {
    base: 'p-4 pl-12 relative leading-5 font-medium',
    withClose: 'pr-12',
    success: 'bg-green-300 text-green-900 dark:bg-green-300 dark:text-green-900',
    danger: 'bg-red-300 text-red-900 dark:bg-red-300 dark:text-red-900',
    warning: 'bg-yellow-300 text-yellow-900 dark:bg-yellow-300 dark:text-yellow-900',
    info: 'bg-blue-300 text-blue-900 dark:bg-blue-300 dark:text-blue-900',
    neutral: 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-100',
    icon: {
      base: 'h-5 w-5',
      success: 'text-green-900 dark:text-green-900',
      danger: 'text-red-900 dark:text-red-900',
      warning: 'text-yellow-900 dark:text-yellow-900',
      info: 'text-blue-900 dark:text-blue-300',
      neutral: 'text-gray-900 dark:text-gray-100',
    },
  },
  // Pagination
  pagination: {
    base: 'flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400',
  },
  // TableFooter
  tableFooter: {
    base: 'px-4 py-3 border-t dark:border-gray-700 bg-gray-50 text-gray-500 dark:text-gray-400 dark:bg-gray-800',
  },
  // TableRow
  tableRow: {
    base: '',
  },
  // TableHeader
  tableHeader: {
    base: 'text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800',
  },
  // TableContainer
  tableContainer: {
    base: 'w-full overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5',
  },
  // TableCell
  tableCell: {
    base: 'px-4 py-3',
  },
  // TableBody
  tableBody: {
    base: 'bg-white divide-y text-gray-700',
  },
  // DropdownItem
  // this is the <li> that lives inside the Dropdown <ul>
  // you're probably looking for the dropdownItem style inside button
  dropdownItem: {
    base: 'last:mb-0 inline-flex items-center cursor-pointer w-full px-2 py-1 text-sm font-medium transition-colors duration-150 hover:bg-gray-800',
  },
  // Dropdown
  dropdown: {
    base: 'divide-y-2 divide-gray-500 overflow-hidden relative mt-1 text-gray-100 bg-gray-900 border-2 border-gray-500 rounded-lg shadow-md min-w-max-content',
    align: {
      left: 'left-0',
      right: 'right-0',
    },
  },
  // Avatar
  avatar: {
    base: 'relative rounded-full inline-block',
    size: {
      large: 'w-10 h-10',
      regular: 'w-8 h-8',
      small: 'w-6 h-6',
    },
  },
  // Modal
  modal: {
    base: 'w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl',
  },
  // ModalBody
  modalBody: {
    base: 'mb-6 text-sm text-gray-700 dark:text-gray-400',
  },
  // ModalFooter
  modalFooter: {
    base: 'flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800',
  },
  // ModalHeader
  modalHeader: {
    base: 'mt-4 mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300',
  },
  // Badge
  badge: {
    type: {
      light: {
        green: 'text-green-900 bg-green-400 border-green-400',
        yellow: 'text-yellow-900 bg-yellow-400 border-yellow-400',
        red: 'text-red-900 bg-red-400 border-red-400',
        gray: 'text-gray-900 bg-gray-100 border-gray-100',
        orange: 'text-orange-900 bg-orange-400 border-orange-400',
        blue: 'text-blue-900 bg-blue-400 border-blue-400',
        purple: 'text-purple-900 bg-purple-400 border-purple-400',
        base: 'inline-flex px-2 py-1 text-sm uppercase font-bold font-mono rounded-md border',
      },
      dark: {
        green: 'text-green-400',
        yellow: 'text-yellow-400',
        red: 'text-red-400',
        gray: 'text-gray-100',
        orange: 'text-orange-400',
        blue: 'text-blue-400',
        purple: 'text-purple-400',
        base: 'inline-flex px-2 py-1 text-sm uppercase font-bold font-mono rounded-md border border-gray-500 bg-gray-800',
      },
    },
  },
  // Backdrop
  backdrop: {
    base: 'fixed inset-0 z-40 flex items-end bg-gray-900 bg-opacity-50 sm:items-center sm:justify-center',
  },
  // Textarea
  textarea: {
    base: 'block w-full text-sm dark:text-gray-300 rounded-md focus:outline-none',
    active:
      'focus:border-purple-400 border-gray-300 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700 dark:focus:ring-gray-300 focus:ring focus:ring-purple-300',
    disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
    valid:
      'border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring focus:ring-green-200 dark:focus:ring-green-200',
    invalid:
      'border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring focus:ring-red-200 dark:focus:ring-red-200',
  },
  // Select
  select: {
    base: 'block w-full text-sm dark:text-gray-300 focus:outline-none rounded-md',
    active:
      'focus:border-purple-400 border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring focus:ring-purple-300 dark:focus:ring-gray-300 dark:focus:border-gray-600',
    select: 'leading-5',
    disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
    valid:
      'border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring focus:ring-green-200 dark:focus:ring-green-200',
    invalid:
      'border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring focus:ring-red-200 dark:focus:ring-red-200',
  },
  // Label
  label: {
    base: 'block text-sm text-gray-700 dark:text-gray-400',
    // check and radio get this same style
    check: 'inline-flex items-center',
    disabled: 'opacity-50 cursor-not-allowed',
  },
  // Input
  input: {
    base: 'focus:outline-none bg-gray-800 border-gray-500 border-2 rounded-md focus:ring-2 focus:ring-gray-300',
    active: 'border-gray-600 focus:border-gray-600',
    disabled: 'cursor-not-allowed opacity-50',
    valid: 'border-green-500 focus:border-green-400 focus:ring-green-200',
    invalid: 'border-red-500 focus:border-red-400 focus:ring-red-200',
    type: {
      text: 'text-gray-100 mt-1 block w-full leading-5',
      password: 'text-gray-100 mt-1 block w-full leading-5',
      radio: 'text-purple-500 form-radio focus:border-purple-400 focus:ring-offset-0 rounded-full',
      checkbox: 'text-purple-500 form-checkbox focus:border-purple-400 focus:ring-offset-0 rounded',
    },
    label: {
      text: 'text-gray-100 font-medium text-sm',
      password: 'text-gray-100 font-medium text-sm',
      radio: 'text-gray-100 font-medium',
      checkbox: 'text-gray-100 font-medium',
    },
    wrapper: {
      text: 'block',
      password: 'block',
      radio: 'space-x-2',
      checkbox: 'space-x-2',
    },
  },
  // HelperText
  helperText: {
    base: 'text-xs text-gray-100',
    valid: 'text-green-400',
    invalid: 'text-red-400',
  },
  // Card
  card: {
    base: 'min-w-0 rounded ring-1 ring-black ring-opacity-5 overflow-hidden',
    color: {
      default: '',
      white: 'bg-gray-100',
      black: 'bg-gray-900',
      green: 'bg-green-900',
      yellow: 'bg-yellow-900',
      red: 'bg-red-900',
      orange: 'bg-orange-900',
      blue: 'bg-blue-900',
      purple: 'bg-purple-900',
    },
  },
  cardBody: {
    base: 'p-4',
  },
  // Button
  button: {
    base: 'align-bottom inline-flex items-center justify-center cursor-pointer leading-0 transition-colors duration-150 font-medium font-mono focus:outline-none',
    block: 'w-full',
    size: {
      larger: 'px-8 py-4 rounded-lg text-2xl',
      large: 'px-6 py-3 rounded-lg text-xl',
      regular: 'px-4 py-2 rounded-lg',
      small: 'px-2 py-1 rounded-md text-sm',
      icon: {
        larger: 'p-4 rounded-lg',
        large: 'p-3 rounded-lg',
        regular: 'p-2 rounded-lg',
        small: 'p-2 rounded-md',
      },
    },
    // styles applied to the SVG icon
    icon: {
      larger: 'h-5 w-5',
      large: 'h-5 w-5',
      regular: 'h-5 w-5',
      small: 'h-3 w-3',
      left: 'mr-2 -ml-1',
      right: 'ml-2 -mr-1',
    },

    blank: {
      base: '',
    },

    primary: {
      base: 'border-2 border-transparent',
      active: 'focus:ring focus:ring-gray-600',
      disabled: 'opacity-50 cursor-not-allowed',
      accent: {
        gray: 'text-gray-900 bg-gray-100 active:bg-gray-100 hover:bg-gray-200',
        green: 'text-green-900 bg-green-400 active:bg-green-400 hover:bg-green-300',
        yellow: 'text-yellow-900 bg-yellow-400 active:bg-yellow-400 hover:bg-yellow-300',
        red: 'text-red-900 bg-red-400 active:bg-red-400 hover:bg-red-300',
        orange: 'text-orange-900 bg-orange-400 active:bg-orange-400 hover:bg-orange-300',
        blue: 'text-blue-900 bg-blue-400 active:bg-blue-400 hover:bg-blue-300',
        purple: 'text-purple-900 bg-purple-400 active:bg-purple-400 hover:bg-purple-300',
      },
    },
    outline: {
      base: 'border-2 focus:outline-none',
      active: 'focus:ring focus:ring-gray-600 bg-gray-800 active:bg-gray-800 hover:bg-gray-700 border-gray-500',
      disabled: 'opacity-50 cursor-not-allowed bg-gray-300',
      accent: {
        gray: 'text-gray-100 hover:border-gray-100',
        green: 'text-green-400 hover:border-green-400',
        yellow: 'text-yellow-400 hover:border-yellow-400',
        red: 'text-red-400 hover:border-red-400',
        orange: 'text-orange-400 hover:border-orange-400',
        blue: 'text-blue-400 hover:border-blue-400',
        purple: 'text-purple-400 hover:border-purple-400',
      },
    },
    link: {
      base: 'bg-gray-800 focus:outline-none border border-transparent',
      active: 'focus:ring focus:ring-gray-600 active:bg-gray-800 hover:bg-gray-700',
      disabled: 'opacity-50 cursor-not-allowed',
      accent: {
        gray: 'text-gray-200',
        green: 'text-green-400',
        yellow: 'text-yellow-400',
        red: 'text-red-400',
        orange: 'text-orange-400',
        blue: 'text-blue-400',
        purple: 'text-purple-400',
      },
    },
  },
}
