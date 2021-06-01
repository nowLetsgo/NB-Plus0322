//1 4 8 5 2 6 3 9
process.nextTick(() => {
  console.log(111);
});

setTimeout(() => {
  console.log(222);
}, 0);
setImmediate(() => {
  console.log(333);
});

const promise = Promise.resolve();

promise
  .then(() => {
    console.log(444);
    process.nextTick(() => {
      console.log(555);
    });
    // queueMicrotask(() => console.log(555));
    setTimeout(() => {
      console.log(666);
    }, 0);
  })
  .catch(() => {
    console.log(777);
  })
  .then(() => {
    console.log(888);
    setImmediate(() => {
      console.log(999);
    });
  })
  .catch(() => {
    console.log(101010);
  })