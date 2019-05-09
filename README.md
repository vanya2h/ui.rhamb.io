# ui.rhamb.io

Open source UI JSS-based react components library without any transpilation. Originally created for `rhamb.io` project.

[![NPM version](https://img.shields.io/npm/v/ui.rhamb.io.svg)](https://www.npmjs.com/package/ui.rhamb.io)
[![CircleCI](https://circleci.com/gh/kv9991/ui.rhamb.io/tree/master.svg?style=svg)](https://circleci.com/gh/kv9991/ui.rhamb.io/tree/master)

## Installation

To install library you should have installed `npm` and `node` at least `9 version`. Go to your project directory then run:

```
npm install --save ui.rhamb.io
```

**Note**: This UI library `NOT` transpiled by default, so you must have own transpile processes

## Usage

Let's see how to use ui.rhamb.io with simple example:

```javascript
// We want to use Button component

import ReactDOM from 'react-dom';
import { Button } from 'ui.rhamb.io';

const handler = () => alert('Hello world');

const App = () => (
  <div>
    <h1>Hello world app</h1>
    <Button onClick={handler}>Click me</Button>
  </div>
);

// Real DOM-node in document where script will be executed

const targetNode = document.getElementById('root');

ReactDOM.render(<App />, targetNode);
```
