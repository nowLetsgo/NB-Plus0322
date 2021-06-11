"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function add(a, b) {
  console.log(a + b);
} //默认暴露
//当一个模块只需要暴露一个对象的时候使用


var _default = add;
exports["default"] = _default;