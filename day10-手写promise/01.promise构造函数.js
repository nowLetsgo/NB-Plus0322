//构造一个myPromise的类

//exector是默认的回调函数
function myPromise(exector) {
    //保存指向实例化对象的this
    const _this = this;
    //给实例化对象扩展两个属性值 status value
    //默认status是pending  默认value是undefined
    _this.status = "pending";
    _this.value = undefined;

    //封装resolve和reject函数，当promise的回调函数触发的时候传递进去
    function resolve(value) {
        if (_this.status !== "pending") return;
        _this.status = "resolved";
        _this.value = value;
    }

    function reject(reason) {
        if (_this.status !== "pending") return;
        _this.status = "rejected";
        _this.value = reason;
    }

    //当构造函数被实例化的时候 exector需要直接触发
    exector(resolve, reject);
}