const EventEmitter = require("events");

//创建子类继承父类EventEmitter
class myEmitter extends EventEmitter {};

//实例化子类
const emitter = new myEmitter();

//绑定事件 对象有一个 eventEmitter.on() 函数，用于将一个或多个函数绑定到命名事件上
emitter.on("myClick", () => {
    console.log("嘿，你调用我了myClick");
})

/* emitter.once("myClick", () => {
    console.log("嘿，你调用我了myClick");
}) */

// eventEmitter.emit() 用于触发事件
setTimeout(() => {
    emitter.emit("myClick");
    emitter.emit("myClick");
}, 2000)