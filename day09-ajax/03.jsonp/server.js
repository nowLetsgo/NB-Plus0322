const express = require("express");
const app = express();



app.get("/login", (req, res) => {
    const {
        user,
        pass,
        callback
    } = req.query;
    console.log(req.query);

    if (user === "laoli" && pass === "123") {
        const data = {
            mes: "ok",
            code: 1
        }
        res.set("content-type", "application/javascript;charset=utf-8");
        return res.send(`${callback}(${JSON.stringify(data)})`);

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