const express = require("express");
const app = express();



app.get("/login", (req, res) => {
    const {
        user,
        pass
    } = req.query;
    console.log(req.query);
    //获取请求的host+port
    console.log(req.headers.referer);
    //允许跨域的地址
    const arr = ["http://127.0.0.1:3320/", "http://127.0.0.1:3520/", "http://127.0.0.1:5500/", "http://127.0.0.1:8320/"]

    if (arr.includes(req.headers.referer)) {
        res.set("Access-Control-Allow-Origin", req.headers.referer.slice(0, -1))
    }
    //允许某一个地址进行跨域
    // res.set("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
    //允许所有地址进行跨域
    // res.set("Access-Control-Allow-Origin", "*")
    if (user === "laoli" && pass === "123") {
        const data = {
            mes: "ok",
            code: 1
        }
        return res.send(data);
    }


    const err = {
        mes: "no ok",
        code: 0
    }
    return res.send(err);
})

app.listen("3000", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("http://127.0.0.1:3000");
})