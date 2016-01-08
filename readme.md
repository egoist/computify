# computify [![Build Status](https://travis-ci.org/egoist/computify.svg?branch=master)](https://travis-ci.org/egoist/computify)

> Compute everything, even with units.

## Install

```bash
$ npm install --save computify
```

## Example

```js
const computify = require('computify')

computify('100px*3')
// => '300px'

computify('100*3')
// => 300

computify('4px*10rem')
// => '40px'
// the second unit won't work
```

## License

MIT © [EGOIST](https://github.com/egoist)
