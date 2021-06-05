const http = require("http");
const fs = require("fs");
const path = require("path");

//使用http模块创建一个服务  参数是一个回调函数 监听客户端请求（当客用户端请求了这个服务器 则回调函数调用）
const server = http.createServer((request, response) => {
    console.log("客户端请求");

    //获取请求文件的地址
    const filePath = path.resolve(__dirname, "01.mp4");
    //给当前的文件创建一个可读流
    const rs = fs.createReadStream(filePath);

    response.setHeader("Content-Type", "video/mp4;charset=utf-8");


    //response本身也是一个可写流，所以可以直接把可读流写到response中
    rs.pipe(response);
})


let port = "3000";
let host = '127.0.0.1';
//给当前创建的服务添加端口号和主机地址,第三个参数是个回调函数，当启动服务的时候调用
server.listen(port, host, () => {
    console.log("服务器启动,请访问：" + `http://${host}:${port}`);
})