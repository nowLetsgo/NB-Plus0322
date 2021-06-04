const fs = require("fs");
const path = require("path");

//得到文件路径
const filePath = path.resolve(__dirname, "text.txt");

//获取promisify
const {
    promisify
} = require("util");

//使用promisify处理异步方法
const open = promisify(fs.open);
const write = promisify(fs.write);
const close = promisify(fs.close);


(async () => {
    const fd = await open(filePath, "a");
    await write(fd, "今天天气真好");
    const re = await close(fd);
    return "写入成功";
})()
.then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })