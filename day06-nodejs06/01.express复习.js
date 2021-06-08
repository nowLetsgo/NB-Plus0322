const express = require("express");

//创建一个application对象
const app = express();

app.get("/:id", (req, res) => {
    //params接受url地址的路径参数
    console.log(req.params);
    res.send(":id")
})

app.get("/", (req, res) => {
    console.log("根目录访问");


    // res.end("你好 世界")
    // res.send("你好 世界")
    // res.download()
    // res.sendFile()
    // res.json();
    // res.redirect();


    console.log(req.url);
    console.log(req.query);

    res.send("你好 世界")
})





//监听端口和启动服务
let port = "3002";
app.listen(port, err => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("服务器启动，请访问" + ` http://127.0.0.1:${port}`);
})