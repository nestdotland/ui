# Nest UI

The component library for Nest Module Registry.

## 🚀 Usage

Install

```sh
npm i @nestdotland/ui
```

Inside `tailwind.config.js`

```js
const NestUI = require('@nestdotland/ui/config')
module.exports = NestUI({
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
})
```

Then place `NestUI` at the root of your project (the order doesn't matter, as long as your application is inside).

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { NestUI } from '@nestdotland/ui'

ReactDOM.render(
  <NestUI>
    <App />
  </NestUI>,
  document.getElementById('root')
)
```

Use components inside your project

```js
import { Button } from '@nestdotland/ui'

function App() {
  return <Button>Hi there!</Button>
}

export default App
```
