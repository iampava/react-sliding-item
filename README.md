# react-sliding-item

![npm](https://img.shields.io/npm/v/react-sliding-item) ![npm](https://img.shields.io/npm/dt/react-sliding-item) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`react-sliding-item` is React component for creating mobile-friendly sliding interactions.


See it live on CodeSandbox: 


## Installation

Make sure you have **React** installed in your project before installing `react-sliding-item`. You'll also need to have **framer-motion** as a peer dependency.

```bash
npm install react-sliding-item framer-motion
```

## Usage

Here's a basic example of how you can use `react-sliding-item`:

```tsx

import { SlidingItem, resetAnimation } from "react-sliding-item";

<SwipableElement
  right={<button>Remove</Button>}
  left={<button onClick={resetAnimation}> More </button>}
>
  <h2> Title </h2>
  <p> Some text </p>
</SwipableElement>
```
