//1.引入第三方模块express
const express = require("express");

//2.创建一个express的application对象
const app = express();

const fs = require("fs");
const path = require("path");

//书写接口
app.get("/", (req, res) => {
    console.log("/ 被请求了");
    // console.log(req);
    console.log(req.method); //请求方式
    console.log(req.params); 
    console.log(req.query); //GET请求的查询字符串组成的对象
    console.log(req.url); //请求的路径信息


    //响应

    //不会设置响应头的content-type
    // res.end("今天真的热")

    //自动设置响应头的content-type
    // res.send("今天真的热")

    //把数据转化为json响应
    // res.json({
    //     "name": "laowang"
    // })

    //响应下载
    /* const filePath = path.resolve(__dirname, "index.html");
    res.download(filePath); */

    //发送文件 如果浏览器可以打开 则使用是浏览器打开
    /* const filePath = path.resolve(__dirname, "index.html");
    res.sendFile(filePath) */


    //重定向
    // res.redirect("http://docs.lipeihua.vip")


    //设置响应头
    /* res.set("hello", "world");
    res.status(200)
    res.send("今天真的热") */


    const filePath = path.resolve(__dirname, "index.html");
    res.sendFile(filePath)

})

app.post("/register", (req, res) => {
    console.log("post请求");

    console.log(req.params)

    res.send("注册成功")
})

app.get("/login", (req, res) => {
    res.send("登录成功")
})

app.get("/img/goods", (req, res) => {
    res.send("商品详情")
})

app.get("/img/:id", (req, res) => {
    res.send("图片路径出错")
})

//访问的是/后边跟任意的路径
app.get("/:id", (req, res) => {
    res.send("请检查路径")
})


//3.给当前的服务监听端口号
app.listen(3001, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("服务启动成功，请访问：" + `http://127.0.0.1:3001`);
})