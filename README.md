# Welcome to LazyBastard

[![Node.js CI](https://github.com/marborkowski//lazy-bastard/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/marborkowski/lazy-bastard/actions/workflows/node.js.yml) [![CodeQL](https://github.com/marborkowski/lazy-bastard/actions/workflows/codeql.yml/badge.svg?branch=main)](https://github.com/marborkowski/lazy-bastard/actions/workflows/codeql.yml)

**LazyBastard** is a React component that allows a child component to
be dynamically loaded only when that component is in the user's field of view (e.g. by
scrolling down the page). This library uses the browser's native **<a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" target="_blank">Intersection Observer API</a>**. See the rest of this documentation for <a href="#compatibility">compatibility</a> for different versions of the most popular browsers.

## Browsers support

<span id="compatibility" />

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge >= 80                                                                                                                                                                                                | >= 55                                                                                                                                                                                                             | >= 55                                                                                                                                                                                                         | >= 12.1                                                                                                                                                                                                       | >= 12.1                                                                                                                                                                                                                       | >= 40                                                                                                                                                                                                     |

## Installation

**YARN**

```shell
yarn add @react-goodies/lazy-bastard
```

**NPM**

```shell
npm install @react-goodies/lazy-bastard --save
```

## Basic implementation

```jsx
import React from "react";
import { LazyBastard } from "@react-goodies/lazy-bastard";

// https://reactjs.org/docs/code-splitting.html#reactlazy
const TestComponent = React.lazy(() => import("./ExampleComponent"));

const App = () => {
  return (
    <div>
      <LazyBastard height={250}>
        <TestComponent name="Eva" />
      </LazyBastard>
    </div>
  );
};

export default App;
```
