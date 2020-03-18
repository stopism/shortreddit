# @stopism/shortreddit

![npm bundle size](https://img.shields.io/bundlephobia/min/@stopism/shortreddit)

A Reddit URL Shortener that's simple to use.

## Install

```
$ npm install @stopism/shortreddit
```

## Usage

```js
const reddit = require("@stopism/shortreddit");

reddit("https://www.reddit.com/r/javascript/comments/6hz7o6/pass_by_reference_pass_by_value/");
//=> "https://redd.it/6hz7o6"

reddit(1337);
//=> Uncaught TypeError: reddit wants a string!
//    at reddit (<anonymous>:2:39)
//    at <anonymous>:11:1
```