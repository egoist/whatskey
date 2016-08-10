'use strict'
const keys = {
  '⌘': 'Command',
  '⇧': 'Shift',
  '⌥': 'Option',
  '⌃': 'Ctrl'
}

module.exports = function getKeyNameByChar(char) {
  return keys[char]
}

module.exports.getCharByKeyName = function (name) {
  return Object.keys(keys).filter(key => keys[key] === name)[0]
}
