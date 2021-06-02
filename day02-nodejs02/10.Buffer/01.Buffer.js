/* 
    Buffer.alloc: 创建指定大小的buffer
    Buffer.from():将数据转成buffer
    toString方法: 把buffer转成数据


*/

const buf1 = Buffer.alloc(11, "李沛华");
console.log(buf1);

const buf2 = Buffer.allocUnsafe(20);
console.log(buf2);

const buf3 = Buffer.from("尚硅谷NB");
console.log(buf3);


//使用toString可以将一个buffer转为字符串
console.log(buf3.toString());
console.log(buf1.toString());
console.log(buf2.toString());