# react-sliding-item

![npm](https://img.shields.io/npm/v/react-sliding-item) ![npm](https://img.shields.io/npm/dt/react-sliding-item) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`react-sliding-item` is React component for creating mobile-friendly sliding interactions.


See it live on CodeSandbox: https://codesandbox.io/p/sandbox/epic-hofstadter-957rvm

## Installation

Make sure you have **React** installed in your project before installing `react-sliding-item`. You'll also need to have **framer-motion** as a peer dependency.

```bash
npm install react-sliding-item framer-motion
```

## Usage

Here's an example that uses TailwindCSS as styling:

```tsx
import { SlidingItem, resetAnimation } from 'react-sliding-item'

function App() {
  return (
    <div className='w-64 m-auto mt-20 overflow-hidden'>
      <SlidingItem
        left={<button className="bg-gray-500 text-white h-full w-full" onClick={resetAnimation}> More </button>}
        right={<button className="bg-red-500 text-white h-full w-full"> Delete </button>}
      >
        <div className="bg-gray-100 p-2">
          <h2> Fix vacuum cleaner</h2>
          <time className="text-gray-500 text-xs"> 10:03 AM</time>
        </div>
      </SlidingItem>
      <SlidingItem
        left={<button className="bg-gray-500 text-white h-full w-full" onClick={resetAnimation}> More </button>}
        right={<button className="bg-red-500 text-white h-full w-full"> Delete </button>}
      >
        <div className="bg-gray-100 p-2">
          <h2> Call pet groomer</h2>
          <time className="text-gray-500 text-xs"> 1:00 PM</time>
        </div>
      </SlidingItem>
      <SlidingItem
        left={<button className="bg-gray-500 text-white h-full w-full" onClick={resetAnimation}> More </button>}
        right={<button className="bg-red-500 text-white h-full w-full"> Delete </button>}
      >
        <div className="bg-gray-100 p-2">
          <h2> Restock cleaning suplies</h2>
          <time className="text-gray-500 text-xs"> 1:30 PM</time>
        </div>
      </SlidingItem>
    </div>
  )
}

export default App
```

## Acknowledgements

Code was inspired from this [Devon Govett](https://twitter.com/devongovett)'s tweet: https://twitter.com/devongovett/status/1683882802977312770
