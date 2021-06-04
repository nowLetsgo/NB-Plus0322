Promise.resolve().then(() => {
        console.log(1)
        //当then中return的是一个Promise.resolve()的时候，PromiseA+规范会默认在后边添加一个.then((res) => res)，js底层也会默认添加一个.then((res) => res)
        return Promise.resolve(2)
        // return Promise.resolve(2).then((res) => res).then((res) => res)
    })
    .then(res => {
        console.log(res)
    })


Promise.resolve()
    .then(() => {
        console.log(3)
    })
    .then(() => {
        console.log(4)
    })
    .then(() => {
        console.log(5)
    })
    .then(() => {
        console.log(6)
    })