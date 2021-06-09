const express = require("express");
const router = new express.Router();
const path = require("path");

/* //权限控制
router.use("/center.html", (req, res, next) => {

}) */

router.get("/center.html", (req, res) => {
    //响应页面
    const filePath = path.resolve(__dirname, "../views/center.html")
    res.sendFile(filePath);
})

module.exports = router;