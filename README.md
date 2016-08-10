<p align="center">
  <br>What&#39;s the key? I&#39;m confused..
</p>

<p align="center">
  <a href="https://npmjs.com/package/whatskey"><img src="https://img.shields.io/npm/v/whatskey.svg?style=flat-square" alt="NPM version"></a>
  <a href="https://npmjs.com/package/whatskey"><img src="https://img.shields.io/npm/dm/whatskey.svg?style=flat-square" alt="NPM downloads"></a>
  <a href="https://circleci.com/gh/egoist/whatskey"><img src="https://img.shields.io/circleci/project/egoist/whatskey/master.svg?style=flat-square" alt="Build Status"></a>
</p>

## Install

```bash
$ npm install --save whatskey
```

## Usage

```js
const whatskey = require('whatskey')

whatskey('⌥')
//=> Option

whatskey('⌃')
//=> Ctrl

whatskey.getCharByKeyName('Command')
//=> ⌘
```

## API

### whatskey(char)

#### char

The key char.

### whatskey.getCharByKeyName(keyName)

#### keyName

The key name, eg: 'Ctrl'.

## License

MIT © [EGOIST](https://github.com/egoist)
