function add(...rest) {
    return rest.reduce((p, i) => {
        return p + i
    })
}


/* 
    - 默认情况下模块内部代码对于外部来说都是不可见的，可以通过两种方式向外部暴露变量和函数
    - 两种方法暴露
        - module.exports
            - 默认是一个对象{}，是真正暴露的对象，也就是module.exports指向的对象是谁，就暴露谁
        - exports
            - 是module.exports的一个引用，指向的是module.exports默认对象


*/
//1.暴露出去的是一个对象 对象里有一个add方法
//将来引入这个模块的的时候，接收的是一个对象，对象中有add
//可以暴露多个方法或属性
module.exports.add = add;
//一次暴露多个
/* module.exports = {
    add1,
    add2,
} */

//2.把默认module.exports指向的对象 直接更换为了add方法，所以暴露的直接是add方法
//将来引入的模块的时候，接受的直接是add方法
//只能暴露一个方法
// module.exports = add;


//3.相当于给module.exports默认的对象添加了一个方法 也可以暴露出去
// exports.add = add;

//4.不能成功暴露，因为我们修改了exports地址，不再指向module.exports,所以并没有给module.exports添加方法
// exports = add;