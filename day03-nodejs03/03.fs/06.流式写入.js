const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "text.txt");

//流式写入 创建可写流
const fd = fs.createWriteStream(filePath, {
    flag: "a"
});

//可写流有一个open和close事件，当可写流打开和关闭的时候触发

fd.on("open", () => {
    console.log("可写流打开 开始写入~");
})

fd.on("close", () => {
    console.log("可写流关闭，停止写入！");
})

//流式写入：可以持续写入
fd.write("锄禾日当午");
fd.write("汗滴禾下土");
fd.write("谁知盘中餐");
fd.write("粒粒皆辛苦");

//当写入完成可以自行关闭流
fd.close();