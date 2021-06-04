//1 2 3 4
/* Promise.resolve().then(() => {
    console.log(1);
    process.nextTick(() => {
        console.log(2);
    })
})
Promise.resolve().then(function () {
    setTimeout(() => {
        new Promise(function (resolve, reject) {
            console.log(3);
            reject();
        }).catch(function () {
            console.log(4);
        });
    })
}); */


//1 3 2 4
/* Promise.resolve().then(() => {
    console.log(1);
    queueMicrotask(() => {
        console.log(2);
    })
})

Promise.resolve().then(function () {
    new Promise(function (resolve, reject) {
        console.log(3);
        reject();
    }).catch(function () {
        console.log(4);
    });
}); */


// 1 3 4 2
/* Promise.resolve().then(() => {
    console.log(1);
    process.nextTick(() => {
        console.log(2);
    })
})
Promise.resolve().then(function () {
    new Promise(function (resolve, reject) {
        console.log(3);
        reject();
    }).catch(function () {
        console.log(4);
    });
}); */