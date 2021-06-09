const express = require("express");
const router = new express.Router();
const path = require("path");


//权限控制
router.use("/center.html", async (req, res, next) => {
    //判断请求有没有携带sessionid
    if (!req.session.username) {
        //拼接err.ejs的路径
        const filePath = path.resolve(__dirname, "../views/err.ejs");
        return res.render(filePath, {
            errData: "权限不足"
        })
    }

    next();
})

router.get("/center.html", (req, res) => {
    //响应页面
    const filePath = path.resolve(__dirname, "../views/center.html")
    res.sendFile(filePath);
})

module.exports = router;