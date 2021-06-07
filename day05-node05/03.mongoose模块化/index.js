//1.引入连接数据库模块
require("./db/index");

//2.引入teacher模块
const teacherModel = require("./schema/teacher");

teacherModel.findOne({
        age: {
            $lte: 20
        }
    })
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })