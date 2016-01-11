# electron-bin-path [![Build Status](https://travis-ci.org/ragingwind/electron-bin-path.svg?branch=master)](https://travis-ci.org/ragingwind/electron-bin-path)

> Find a path of electron bin installed in local or global node_modules


## Install

```
$ npm install --save electron-bin-path
```


## Usage

```js
const bin = require('electron-bin-path');

bin().then(p => {
	//=> './node_modules/.bin/electron'
});
```


## API

### bin()

return promise. resolving with the path first found.

## License

MIT © [ragingwind](http://ragingwind.me)
