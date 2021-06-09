//引入express
const express = require("express");

//创建一个express的application对象
const app = express();

//连接数据库
require("./db")

//引入ejs
const ejs = require("ejs");
//通知express使用ejs模板引擎
app.set("view engine", "ejs");
app.set("views", "views");

//路由管理模块引入
const isEmptyRouter = require("./router/isEmptyRouter");
const regRouter = require("./router/regRouter");
const registerRouter = require("./router/registerRouter");
const loginRouter = require("./router/loginRouter");
const centerRouter = require("./router/centerRouter");



//官方的静态资源中间件
app.use(express.static("./public"));
app.use(express.static("./static"));

//处理req请求携带的数据的中间件，把req的数据放在了req.body的属性上了
app.use(express.urlencoded({
    extended: true
}))


//把所有的引入的路由管理挂载在app上
app.use(isEmptyRouter)
app.use(regRouter)
app.use(registerRouter)
app.use(loginRouter)
app.use(centerRouter)

//监听端口号和服务器状态
let port = "3002";
app.listen(port, err => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("服务器启动，请访问" + ` http://127.0.0.1:${port}`);
})