const name = "laohuang"

function mins(a, b) {
    console.log(a - b);
}

function hello() {
    console.log("hello");
}


//统一暴露
//当模块部分暴露的时候使用
export {
    hello,
    mins,
    name
}