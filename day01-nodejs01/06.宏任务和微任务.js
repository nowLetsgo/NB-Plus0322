/* 
    宏任务和微任务：
        - 异步代码有优先级关系。有的优先级高先执行，有的优先级低后执行。
        - 异步代码分为宏任务（macrotask ）和微任务（microtask ）
            - 宏任务：包括整体代码script，setTimeout，setInterval等等
            - 微任务： Promise.then/catch/fanally，process.nextTick，queueMicrotask(nodeJS语义化方法，就是微任务的意思)
        - js引擎执行异步代码。会优先执行微任务，再执行宏任务
            - 微任务优先级高，优先级最高的是process.nextTick，其他微任务，按代码顺序依次执行
            - 宏任务优先级低：顺序看nodejs的事件轮询机制
        - 过程如下：
            1. 执行栈 选择最先进入队列的宏任务（一般都是script），执行其同步代码直至结束,在执行同步的时候如果有设置异步代码，会把微任务放入微任务队列，把宏任务交给对应的模块管理
            2. 检查是否存在微任务，有则会执行至微任务队列为空；
            3. 执行宏任务中的异步代码（setTimeout等回调）
            4. 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
            5. 当前的宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
            6. 开始下一个宏任务（从事件队列中获取）
*/