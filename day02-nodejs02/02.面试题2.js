//1 2 3 5 4
setTimeout(() => {
    console.log(4);
}, 0);

new Promise(resolve => {
    console.log(1);
    for (let i = 0; i < 10000; i++) {
        i == 9999 && resolve();
    }
    console.log(2)
}).then(() => {
    console.log(5)
})

console.log(3)