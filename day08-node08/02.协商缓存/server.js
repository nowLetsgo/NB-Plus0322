const express = require("express");

const {
    exec
} = require("child_process")

const path = require("path");

const etag = require("etag");

const {
    promisify
} = require("util");

const fs = require("fs");
const {
    resolve6
} = require("dns");

const app = express();

app.get("/", async (req, res) => {
    // sendFile已经把协商缓存设置好了
    /* const filePath = path.resolve(__dirname, "./index.html");
    res.sendFile(filePath) */

    //在接收请求的时候，先获取请求头携带的if-none-match 和 if-modified-since
    const ifNoneMatch = req.headers["if-none-match"];
    const ifModifiedSince = req.headers["if-modified-since"];
    console.log(ifNoneMatch, ifModifiedSince);


    const filePath = path.resolve(__dirname, "./index.html");
    const rs = fs.createReadStream(filePath);

    //fs有一个stat方法 可以得到文件的详细信息
    //使用promisify方法把stat方法包装成promise对象
    const stat = promisify(fs.stat);

    //得到文件详细的信息
    const fileDetail = await stat(filePath);
    // console.log(fileDetail);

    //得到文件的最后修改时间
    const fileTime = fileDetail.mtime.toGMTString();
    //得到文件的唯一标识
    const fileEtag = etag(fileDetail);
    // console.log(fileTime.toString(), fileEtag);


    //协商缓存判断
    if (ifNoneMatch === fileEtag && ifModifiedSince === fileTime) {
        return res.status(304).end()
    }


    //把文件的唯一标识和最后修改时间设置在响应头中
    res.set("ETag", fileEtag);
    res.set("Last-Modified", fileTime);

    rs.pipe(res);
})




app.listen("3000", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("服务已经启动  http://127.0.0.1:3000");
    // exec("start http://127.0.0.1:3000")
})