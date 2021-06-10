const express = require("express");

const {
    exec
} = require("child_process")

const path = require("path");

const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
    const filePath = path.resolve(__dirname, "./index.html");
    const rs = fs.createReadStream(filePath);
    rs.pipe(res);
})

/* 
    强制缓存：
    - 强制缓存就是向浏览器缓存查找该请求结果，并根据该结果的缓存规则来决定是否使用该缓存结果的过程。
    - 简单来讲就是强制浏览器使用当前缓存
    - 首先请求头需要携带Cache-Control的信息为max-age = 时间：客户端允许开启强制缓存
    - 响应头需要携带Cache-Control的信息为max-age = 时间：服务端也允许开启强制缓存


*/
app.get("/img", (req, res) => {
    const filePath = path.resolve(__dirname, "./lijing.jpg");
    const rs = fs.createReadStream(filePath);
    //设置强制缓存
    res.set("Cache-Control", "max-age=10000")
    rs.pipe(res);
})




app.listen("3000", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("服务已经启动  http://127.0.0.1:3000");
    // exec("start http://127.0.0.1:3000")
})