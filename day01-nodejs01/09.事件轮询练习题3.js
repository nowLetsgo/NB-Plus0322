// 1 3 6 4 5 2
console.log('1') //同步

setTimeout(() => {
  console.log('2') //宏任务
}, 0)

new Promise((resolve) => {
    console.log('3') //同步
    resolve()
  })
  .then(() => {
    console.log('4') //微任务
  })
  .then(() => {
    console.log('5') //微任务
  })

console.log('6') //同步