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


//4.创建model对象（集合）
//两个参数：集合的名字  集合的约束对象
const teacherModel = mongoose.model("teacher", teacherSchema);


//1.增
//增加一个文档
/* teacherModel.create({
    name: "张三",
    age: 18,
    sex: "男",
    hobby: ["唱", "跳"],
    createTime: Date.now()
}, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("数据添加成功");
}) */

//增加多个文档
/* teacherModel.create([{
    name: "王四",
    age: 22,
    sex: "女",
    hobby: ["篮球", "Rap"],
    createTime: Date.now()
}, {
    name: "李五",
    age: 33,
    sex: "男",
    hobby: ["篮球", "晶晶"]
}], err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("数据添加成功");
}) */

//create方法返回一个promise对象，所以可以解决回调函数问题

teacherModel.create([{
        name: "王七",
        age: 12,
        sex: "女",
        hobby: ["足球", "Rap"],
        createTime: Date.now()
    }])
    .then(data => {
        //返回添加的对象
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })