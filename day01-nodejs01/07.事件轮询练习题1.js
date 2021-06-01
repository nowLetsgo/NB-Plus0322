//2 1 4 3 6
//微任务
process.nextTick(() => {console.log(111);});


//同步代码
const promise = new Promise(resolve => {
  console.log(222);
  resolve();
});

//宏任务
setImmediate(() => {console.log(666);});

//宏任务
setTimeout(() => {console.log(333);}, 100);
// setTimeout(() => {console.log(333);});

//微任务
promise.then(() => {console.log(444);});

