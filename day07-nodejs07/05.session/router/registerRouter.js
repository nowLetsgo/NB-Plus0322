const express = require("express");

const router = new express.Router();

const path = require("path")

//引入mongoose的当前用户信息集合
const userModel = require("../model/userModel");


//注册接口
router.get("/register", async (req, res) => {
    //查看用户输入内容 拿到用户名和密码
    const {
        username,
        password
    } = req.query;


    //判断当前的用户名是否被注册
    //去数据库查询当前的用户名
    const isHasUser = await userModel.findOne({
        username
    })

    if (isHasUser) {
        //拼接err.ejs的路径
        const filePath = path.resolve(__dirname, "../views/err.ejs");
        return res.render(filePath, {
            errData: "用户名已经被注册"
        })
    };


    //向数据库写入当前用户信息
    const registerData = await userModel.create({
        username,
        password
    });

    console.log(registerData)
    // res.send("注册成功");
    //如果注册成功则直接重定向到登录页面
    res.redirect("/login.html")

})

module.exports = router;