# react-sliding-item

![npm](https://img.shields.io/npm/v/react-sliding-item) ![npm](https://img.shields.io/npm/dt/react-sliding-item) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`react-sliding-item` is React component for creating mobile-friendly sliding interactions.


See it live on CodeSandbox: https://codesandbox.io/p/sandbox/epic-hofstadter-957rvm

<!-- Video -->
**Video Demo:**
https://raw.githubusercontent.com/iampava/react-sliding-item/main/assets/demo.mov

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

## Exports

This package exports 2 things:

1. A React component called `<SlidingItem>` with the following Prop definition:

```typescript
type Props =
  {
    /** Configuration options for the sliding item. */
    options?: {
      /** Width of the left/right element in pixels. */
      max?: number;
      /** How far the user has to drag before the element is considered "swiped". This is a numeric value between 0 and `max` and represents pixels. */
      threshold?: number;
    };
    children: React.ReactNode;
  } & (
    | {
      right: JSX.Element;
      left?: JSX.Element;
    }
    | {
      right?: JSX.Element;
      left: JSX.Element;
    }
    | {
      right: JSX.Element;
      left: JSX.Element;
    }
  );
```

2. A function called `resetAnimation` that let's you return to the initial position.

## Acknowledgements

Code was inspired from this [Devon Govett](https://twitter.com/devongovett)'s tweet: https://twitter.com/devongovett/status/1683882802977312770
