//引入express
const express = require("express");

//引入mongoose
const mongoose = require("mongoose");

//连接数据库
require("./db")

//引入mongoose的当前用户信息集合
const userModel = require("./model/userModel");

//创建一个express的application对象
const app = express();




//监听端口号和服务器状态
let port = "3002";
app.listen(port, err => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("服务器启动，请访问" + ` http://127.0.0.1:${port}`);
})