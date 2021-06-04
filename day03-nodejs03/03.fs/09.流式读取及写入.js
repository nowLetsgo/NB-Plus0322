const fs = require("fs");
const path = require("path");;
const readFilePath = path.resolve(__dirname, "01.mp4");
const writeFilePath = path.resolve(__dirname, "02.mp4");

//流式读取数据 创建可读流
//流式写入数据 创建可写流
const rs = fs.createReadStream(readFilePath);
const ws = fs.createWriteStream(writeFilePath, {
    flag: "a"
})

//书写一个data事件 监听可读流
rs.on("data", (chunk) => {
    //chunk就是读取的数据，然后把读取的数据流式写入到可写流中
    ws.write(chunk)
})

//书写一个end事件，监听可读流关闭
rs.on("end", () => {
    //关闭可写流
    ws.close();
})


//给可写流绑定close事件，当可写流关闭的时候触发
ws.on("close", () => {
    console.log("文件写入完毕");
})