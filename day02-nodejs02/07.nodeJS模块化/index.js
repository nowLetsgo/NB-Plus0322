//一般所有的模块都有一个入口文件，我们常用 index.js  或者main.js表示

//引入模块 使用require方法
// require()





/* 
    模块的标识：
        - 就是require中的参数
        - 引入模块类型
            - 自定义模块
                需要添加路径信息（当前文件夹需要添加./）
                可以省略文件后缀名（按照以下顺序默认添加 1.js  2.json  3.node）
            - node内部模块
                直接书写模块名称即可
            - 第三方模块(jQuery\vue等)
                - 首先需要npm下载，然后再直接书写当前模块名称

        require("./add.js")
        require("fs")
        require("jquery");
*/



//开始引入模块
//1.当暴露的方法在对象中的时候，接受的是一个对象
/* const o = require("./add");
console.log(o);
 */


//2.当暴露的方法在对象中，可以使用解构赋值，拿出这个方法
/* const {
    add
} = require("./add");

console.log(add(1, 2, 3, 4))


const {
    sub
} = require("./sub");
sub(4, 1); */


//3.直接暴露的是一个方法，直接接受即可
const sub = require("./sub");
sub(1, 4)