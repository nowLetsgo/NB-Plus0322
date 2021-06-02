//可以打印出实参
console.log(arguments);
//根据实参获取所在的函数
console.log(arguments.callee);
//把实参得到函数转字符串打印出来
console.log(arguments.callee.toString());

/* 
    得到node中的js默认外层函数如下：
    function (exports, require, module, __filename, __dirname) {
        
    }

    exports:指向的对象 就是被暴露的对象
    require:用来引入其他模块
    module: 真正用来暴露模块 里边有一个module.exports方法
    __filename:当前文件的绝对路径
    __dirname：当前文件所在文件夹的绝对路径

*/
console.log(exports); //{}
console.log(require); //方法
console.log(module); // 对象 有很多方法
console.log(__filename); //当前文件的绝对路径
console.log(__dirname); //当前文件所在文件夹的绝对路径

