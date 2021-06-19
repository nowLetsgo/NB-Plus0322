const express = require("express");
const app = express();

app.get("/login", (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    setTimeout(() => {
        console.log(req.query);
        if (req.query.name === "laowang" && req.query.pass === "123") {
            return res.json({
                code: 10000,
                mes: "登录成功",
                data: {
                    name: "laowang"
                }
            })
        }

        res.json({
            code: 10001,
            mes: "登录失败"
        })
    }, 5000)
})

app.listen("3000", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("http://127.0.0.1:3000");
})