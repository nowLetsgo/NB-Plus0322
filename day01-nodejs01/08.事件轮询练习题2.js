//微任务
Promise.resolve().then(() => {console.log(555);});

//微任务 并且一定在第一的位置
process.nextTick(() => {
  console.log('process.nextTick() 333');
})

//宏任务
setTimeout(() => {
  console.log('setTimeout()  111');
}, 0)

//宏任务
setImmediate(() => {
  console.log('setImmediate() 222');
})

//同步
console.log('全局代码执行完了 444');

