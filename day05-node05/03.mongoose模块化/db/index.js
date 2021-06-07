//这个db文件专门用来连接数据库
//1.引入mongoose模块
const mongoose = require("mongoose");

//2.连接数据库 （open事件监听） 
mongoose.connect("mongodb://127.0.0.1:27017/atguigu", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//当数据库连接成功以后 会触发mongoose.connection的open事件
mongoose.connection.once("open", err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("数据库连接成功");
})