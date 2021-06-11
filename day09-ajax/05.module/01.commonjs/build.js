(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function add(a, b) {
    console.log(a + b);
}

module.exports = add;
},{}],2:[function(require,module,exports){
const add = require("./add");
const mins = require("./mins");

add(1, 2);
mins(1, 3);


/* 
    browserify：
        可以让浏览器中使用commonjs模块化规范


*/
},{"./add":1,"./mins":3}],3:[function(require,module,exports){
function mins(a, b) {
    console.log(a - b);
}
module.exports = mins;
},{}]},{},[2]);
