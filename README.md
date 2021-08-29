# Object Dot Parser

This module allows you to parse objects whose attributes are strings with points, and converts them into nested objects.

<a href="https://nodei.co/npm/object-dot-parser">
  <img src="https://nodei.co/npm/object-dot-parser.png?downloads=true">
</a>

[![npm version](https://img.shields.io/npm/v/object-dot-parser.svg?style=flat-square)](https://badge.fury.io/js/object-dot-parser)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/LuisFuenTech/object-dot-parser/blob/master/LICENSE)
[![NodeJS](https://img.shields.io/badge/node-8.x.x-brightgreen?style=flat-square)](https://github.com/LuisFuenTech/object-dot-parser/blob/master/package.json)
[![install size](https://packagephobia.now.sh/badge?p=object-dot-parser)](https://packagephobia.now.sh/result?p=object-dot-parser)

<!-- [![npm downloads](https://img.shields.io/npm/dm/object-dot-parser.svg?style=flat-square)](http://npm-stat.com/charts.html?package=object-dot-parser) -->

# Compatibility

The minimum supported version of Node.js is v8.

# Usage

## Installation

```bash
$ npm i object-dot-parser
```

## Test

Run from the root folder:

```bash
$ npm run test
```

## Importing

```js
const objectDotParser = require("object-dot-parser");
```

## Example

```js
const objectDotParser = require("object-dot-parser");

const person = {
  "person.name": "Luis",
  "person.age": 74,
  "person.address.city": "Atlanta",
  "person.address.street.name": "St. Joseph",
  "person.address.street.number": "#34-46",
  "person.position": "Software Engineer",
  "social.instagram": "luisfuentech",
  "social.twitter": "luisfuentech",
  "social.github": "luisfuentech"
};

console.log(JSON.stringify(objectDotParser(person), null, 2));
```

Output

```bash
{
  "person": {
    "name": "Luis",
    "age": 74,
    "address": {
      "city": "Atlanta",
      "street": {
        "name": "St. Joseph",
        "number": "#34-46"
      }
    },
    "position": "Software Engineer"
  },
  "social": {
    "instagram": "luisfuentech",
    "twitter": "luisfuentech",
    "github": "luisfuentech"
  }
}
```

# License

[MIT](https://github.com/LuisFuenTech/object-dot-parser/blob/master/LICENSE)
