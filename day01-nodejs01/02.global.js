/* 
    global对象：
        NodeJS的顶层对象
        包含了
            - 3个计时器方法 和 3个清除计时器的方法
            - 微任务方法
            - process\Buffer\console对象


*/

console.log(global);
// setInterval(() => console.log(1), 1000)
// setTimeout(() => console.log(2), 0)
// queueMicrotask(() => console.log(3))
// setImmediate(() => console.log(4))

// console.log(global.process);
// console.log(global.Buffer);
// console.log(global.console);