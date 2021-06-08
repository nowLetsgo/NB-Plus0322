//引入express
const express = require("express");

//引入path
const path = require("path");

//引入mongoose
const mongoose = require("mongoose");

//连接数据库
require("./db")

//引入mongoose的当前用户信息集合
const userModel = require("./model/userModel");

//创建一个express的application对象
const app = express();

//注册接口
app.get("/register", async (req, res) => {
    //查看用户输入内容 拿到用户名和密码
    console.log(req.query);
    const {
        username,
        password
    } = req.query;

    //查看用户的账号和密码是否有空
    if (!username || !password) return res.send("账号密码不能为空");

    //向数据库写入当前用户信息
    const registerData = await userModel.create({
        username,
        password
    });

    console.log(registerData)
    res.send("注册成功");

})



//默认路径是index.html
app.get("/", (req, res) => {
    //当访问根目录则默认重定向到index.html
    res.redirect("/index.html")
})
//index.html的路径
app.get("/index.html", (req, res) => {
    //获取index.html的路径
    const filePath = path.resolve(__dirname, "./public/index.html");
    res.sendFile(filePath);
})
//login.html的路径
app.get("/login.html", (req, res) => {
    //获取index.html的路径
    const filePath = path.resolve(__dirname, "./public/login.html");
    res.sendFile(filePath);
})
//register.html的路径
app.get("/register.html", (req, res) => {
    //获取index.html的路径
    const filePath = path.resolve(__dirname, "./public/register.html");
    res.sendFile(filePath);
})


//监听端口号和服务器状态
let port = "3002";
app.listen(port, err => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("服务器启动，请访问" + ` http://127.0.0.1:${port}`);
})