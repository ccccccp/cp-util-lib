'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));

function Add () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (total, item) {
    return total + item;
  }, 0);
}

function Sub (a, b) {
  return a - b;
}

var Chunk = _.chunk;

var index = {
  Add: Add,
  Sub: Sub,
  Chunk: Chunk
};

exports.Add = Add;
exports.Sub = Sub;
exports.Chunk = Chunk;
exports.default = index;
