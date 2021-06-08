//引入express
const express = require("express");

//创建一个express的application对象
const app = express();

//引入path
const path = require("path");

//引入mongoose
const mongoose = require("mongoose");

//引入ejs
const ejs = require("ejs");

//通知express使用ejs模板引擎
app.set("view engine", "ejs");
app.set("views", "views");

//连接数据库
require("./db")

//引入mongoose的当前用户信息集合
const userModel = require("./model/userModel");


//官方的静态资源中间件
app.use(express.static("./public"));
app.use(express.static("./static"));

//处理req请求携带的数据的中间件，把req的数据放在了req.body的属性上了
app.use(express.urlencoded({
    extended: true
}))


//处理账号和密码是否为空的中间件
app.use((req, res, next) => {
    //查看用户输入内容 拿到用户名和密码
    const {
        username,
        password
    } = req.query;

    //查看用户的账号和密码是否为空
    if (!username || !password) {
        //拼接err.ejs的路径
        const filePath = path.resolve(__dirname, "./public/err.ejs");
        return res.render(filePath, {
            errData: "账号或者密码不能为空"
        })
    }

    //当处理完成需要继续向下走的话 需要调用next方法
    next();
})

//处理账号和密码的正则校验
app.use((req, res, next) => {
    //查看用户输入内容 拿到用户名和密码
    const {
        username,
        password
    } = req.query;

    const userReg = /^[A-Z]{1}[0-9a-zA-Z_]{6,10}$/;
    const passReg = /^[0-9]{6}$/;
    if (!userReg.test(username) || !passReg.test(password)) {
        //拼接err.ejs的路径
        const filePath = path.resolve(__dirname, "./public/err.ejs");
        return res.render(filePath, {
            errData: "账号和密码格式不对"
        })
    }

    next();

})

//注册接口
app.get("/register", async (req, res) => {
    //查看用户输入内容 拿到用户名和密码
    const {
        username,
        password
    } = req.query;


    //判断当前的用户名是否被注册
    //去数据库查询当前的用户名
    const isHasUser = await userModel.findOne({
        username
    })

    if (isHasUser) {
        //拼接err.ejs的路径
        const filePath = path.resolve(__dirname, "./public/err.ejs");
        return res.render(filePath, {
            errData: "用户名已经被注册"
        })
    };


    //向数据库写入当前用户信息
    const registerData = await userModel.create({
        username,
        password
    });

    console.log(registerData)
    // res.send("注册成功");
    //如果注册成功则直接重定向到登录页面
    res.redirect("/login.html")

})

//登录接口
app.get("/login", async (req, res) => {
    //拿到用户的登录信息
    const {
        username,
        password
    } = req.query;


    //根据username去数据库查询是否存在该用户
    const isHasUser = await userModel.findOne({
        username
    });

    //如果有没有用户名则返回用户名不存在
    console.log(isHasUser) //如果不存在则返回null
    if (!isHasUser) {
        //拼接err.ejs的路径
        const filePath = path.resolve(__dirname, "./public/err.ejs");
        return res.render(filePath, {
            errData: "用户名不存在"
        })
    }

    //如果用户名存在，则判断密码是否正确
    if (isHasUser.password != password) {
        //拼接err.ejs的路径
        const filePath = path.resolve(__dirname, "./public/err.ejs");
        return res.render(filePath, {
            errData: "密码错误"
        })
    }

    // return res.send("登录成功")
    //登录成功跳转到个人中心页
    const filePath = path.resolve(__dirname, "./public/center.html")
    res.sendFile(filePath);
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


//监听端口号和服务器状态
let port = "3002";
app.listen(port, err => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("服务器启动，请访问" + ` http://127.0.0.1:${port}`);
})