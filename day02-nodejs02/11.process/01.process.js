/* 
    process.argv():
        查看node启动时 传递的命令行参数
        是一个数组：
            - 第一个值是node命令的位置
            - 第二个是当前文件的位置路径
            - 后边的参数 是用户启动时传递的传递的

    process.argv0
        获取node路径

    process.cwd();
        node的工作目录（也就是node在哪一个路径启动） 而不是当前文件的目录

*/
// console.log(process.argv);
// console.log(process.argv0);

console.log(process.cwd())


const proArr = process.argv;

if (proArr[2] === "start") {
    console.log("开启启动服务");
} else if (proArr[2] === "end") {
    console.log("关闭服务");
} else {
    console.log("请重新传递命令");
}


let i = 0;
setInterval(() => {
    console.log(i++);
    if (i > 4) {
        process.exit("");
    }
}, 1000)