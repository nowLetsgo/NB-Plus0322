const path = require("path");

//根据当前路径 得到其他绝对路径
const filePath1 = path.resolve("../11.process/index.txt");
console.log(filePath1);

const filePath2 = path.resolve("../11.process", "01.txt");
console.log(filePath2);

const filePath3 = path.resolve("../11.process/util", "01.js");
console.log(filePath3);



//需求1：在path.js(当前)文件，获取process.js文件的绝对路径
const processPath = path.resolve("../11.process", "01.process.js");
console.log(processPath);

//需求：在path.js（当前）文件，获取其他文件的绝对路径
const otherPath = path.resolve(__dirname, "01.txt");
console.log(otherPath);