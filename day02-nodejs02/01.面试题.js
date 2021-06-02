//4 1 3 6 8 2 7 5
async function async1() {
    console.log('1');
    //await async2()中  acync2函数的执行是同步的 因为先执行完方法才会执行await
    await async2();
    console.log('2')
}

async function async2() {
    console.log('3')
}
console.log('4');
setTimeout(() => {
    console.log('5')
}, 0);
async1();
new Promise((resolve) => {
    console.log('6');
    resolve()
}).then(() => {
    console.log('7')
});
console.log('8')