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

    //查看用户的账号和密码是否为空
    if (!username || !password) return res.send("账号密码不能为空");

    //判断当前的用户名是否被注册
    //去数据库查询当前的用户名
    const isHasUser = await userModel.findOne({
        username
    })

    if (isHasUser) return res.send("用户名已经被注册");


    //向数据库写入当前用户信息
    const registerData = await userModel.create({
        username,
        password
    });

    console.log(registerData)
    res.send("注册成功");

})

//登录接口
app.get("/login", async (req, res) => {
    //拿到用户的登录信息
    const {
        username,
        password
    } = req.query;

    //查看用户的账号和密码是否为空
    if (!username || !password) return res.send("账号密码不能为空");

    //根据username去数据库查询是否存在该用户
    const isHasUser = await userModel.findOne({
        username
    });

    //如果有没有用户名则返回用户名不存在
    console.log(isHasUser) //如果不存在则返回null
    if (!isHasUser) return res.send("用户名不存在");

    //如果用户名存在，则判断密码是否正确
    if (isHasUser.password === password) {
        return res.send("登录成功")
    }
    return res.send("密码错误");

})


//图片接口
app.get("/static/:src", (req, res) => {
    // console.log(req.params)
    const {
        src
    } = req.params;

    const filePath = path.resolve(__dirname, "./static", src);
    res.sendFile(filePath);
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