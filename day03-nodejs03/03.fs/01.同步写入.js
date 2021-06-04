const fs = require("fs");
const path = require("path");

//得到要写入文件的绝对路径
const filePath = path.resolve(__dirname, "text.txt")
console.log(filePath)

//同步打开文件(第二个参数是文件系统的flag:默认r代表可写，如果没有这个文件则报错，还有a,代表追加，如果没有这个文件则创建)、
const fd = fs.openSync(filePath, "a");
//读取文件的返回值是一个当前文件的id标识
console.log(fd);


//同步写入
fs.writeSync(fd, "蛋黄的长裙");

//关闭文件
fs.closeSync(fd);


console.log("同步的文件操作没有执行完成，是不会执行这条语句的")