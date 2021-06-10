const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const zlib = require("zlib");


app.get("/", (req, res) => {
    const filePath = path.resolve(__dirname, "./index.html");
    res.sendFile(filePath)
})

app.get("/login", (req, res) => {


    const data = {
        mes: "ok",
        code: 1
    }
    res.json(data);
})

app.listen("3000", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("http://127.0.0.1:3000");
})