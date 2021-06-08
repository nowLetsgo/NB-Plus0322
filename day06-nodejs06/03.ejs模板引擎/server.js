//引入express
const express = require("express");

//引入path
const path = require("path");

//创建一个express的application对象
const app = express();

//首先引入ejs
const ejs = require("ejs");

//通知express使用ejs模板引擎
app.set("view engine", "ejs");
app.set("views", "views");


app.get("/", (req, res) => {
    //获取模板的路径
    const filePath = path.resolve(__dirname, "index.ejs");
    const data = "hello jingjing";

    res.render(filePath, {
        data: data,
        name: "laowang",
        user: [{
            name: "laowang",
            age: 18,
            sex: "nan"
        }, {
            name: "xiaowang",
            age: 19,
            sex: "nv"
        }, {
            name: "zhongwang",
            age: 28,
            sex: "nan"
        }, {
            name: "dawang",
            age: 38,
            sex: "nv"
        }]
    })
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