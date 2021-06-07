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

// 3. 创建Schema对象， 方便未来对某个集合的值进行约束
const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true, //唯一存在（以后不能有name的重名）
        required: true //必填项
    },
    age: Number,
    sex: String,
    // hobby:Array,//限制值必须是一个数组
    hobby: [String], //限制值必须是一个数组 并且数组的值必须是字符串
    createTime: {
        type: Date,
        default: Date.now
    }
});

// console.log(teacherSchema);