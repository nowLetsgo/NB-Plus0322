//引入的路径需要使用commonjs规范


//当引入的模块是默认暴露的时候  
import add from "./add";
//当引入的模块是统一暴露或者分别暴露的时候 必须使用解构赋值的方法接受
import {
    hello,
    mins,
    name
} from "./mins"

import {
    //当重名的时候给某个变量起一个别名
    name as name1,
    age,
    sex,
    say
} from "./person";

//无法直接接受暴露的对象，一般使用解构赋值
// import person from "./person";

//如果一定想要一个对象保存所有的暴露值
// import * as person from "./person"

console.log("111111", person);

console.log(name);
hello();
add(1, 2);



/* 
    浏览器不支持ES6模块化：
        1.使用babel把某个文件夹内容的文件 编译成一个新的文件夹
        编译成为了commonJS规范
            - 本地安装babel：npm install --save-dev @babel/core @babel/cli @babel/preset-env
            - 配置package.json
                "babel": {
                    "presets": [
                    "@babel/env"
                    ]
                }
            - npx(当命令没有安装到全局的时候，启动本地命令)
            - npx babel js -d build

        2.使用browserify把刚编译好的commonjs规范的入口文件编译成浏览器可识别的文件

*/