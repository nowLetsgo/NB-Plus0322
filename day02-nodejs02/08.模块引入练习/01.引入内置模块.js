const os = require("os");
const free = os.freemem();
const total = os.totalmem();
const scale = free / total;
console.log("内存剩余容量是:" + (scale * 100).toFixed(2) + "%");