/* const {
    JSDOM
} = require("jsdom");
const {
    window
} = new JSDOM("");
const $ = require("jquery")(window);

const arr = [1, 2, 3, 4];

$.each(arr, (index, item) => {
    console.log(item);
}) */


/* const download = require("download-git-repo");
download("github:nowLetsgo/6-1happy", "./test", err => {
    console.log(err ? "error" : "success");
}) */


//如果需要等待图形展示 需要下载ora的包
//cnpm i ora -s
const download = require("download-git-repo");
const ora = require("ora");
const process = ora("下载。。。项目");
process.start();
download("github:nowLetsgo/6-1happy", "./test", err => {
    if (err) {
        process.fail()
    } else {
        process.succeed();
    }
})