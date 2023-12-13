# calculate-videos-length

Calculate length of videos in a folder inside your JavaScript Application.

## Installation

using npm:

```shell
npm i calculate-videos-length
```

using yarn:

```shell
yarn add calculate-videos-length
```

using pnpm:

```shell
pnpm add calculate-videos-length
```

## Usage

CommonJS:

```js
const calculateVideoLength = require("calculate-videos-length");

const info = await calculateVideoLength("/media/fluentmoheshwar/Data/Song/Hindi Songs/", ".mp4");

console.log(info);
```

ES Module:

```js
import calculateVideoLength from "calculate-videos-length";

const info = await calculateVideoLength("/media/fluentmoheshwar/Data/Song/Hindi Songs/", ".mp4");

console.log(info);
```
