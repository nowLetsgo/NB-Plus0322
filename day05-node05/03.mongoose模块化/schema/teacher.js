const mongoose = require("mongoose");
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

//直接把这个schema所约束的集合给创建了
//4.创建model对象（集合）
//两个参数：集合的名字  集合的约束对象
const teacherModel = mongoose.model("teacher", teacherSchema);


//把创建集合暴露出去
module.exports = teacherModel;