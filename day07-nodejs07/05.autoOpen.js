//引入express
const express = require("express");

const {
    exec
} = require('child_process');

//创建一个express的application对象
const app = express();

app.get("/", (req, res) => {
    res.send("下雨了")
})

//监听端口号和服务器状态
let port = "3002";
app.listen(port, err => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("服务器启动，请访问" + ` http://127.0.0.1:${port}`);
    exec("start http://127.0.0.1:3002")
})