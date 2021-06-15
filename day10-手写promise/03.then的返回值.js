//构造一个myPromise的类

//exector是默认的回调函数
function myPromise(exector) {
    //保存指向实例化对象的this
    const _this = this;
    //给实例化对象扩展两个属性值 status value
    //默认status是pending  默认value是undefined
    _this.status = "pending";
    _this.value = undefined;
    _this.callback = {};

    //封装resolve和reject函数，当promise的回调函数触发的时候传递进去
    function resolve(value) {
        if (_this.status !== "pending") return;
        _this.status = "resolved";
        _this.value = value;

        //为了保证then中的onResolved函数永远是异步的，则我们给他包裹一层异步代码
        //保证onRejected执行的时候，then要已经执行过了
        setTimeout(() => {
            _this.callback.onResolved(value);
        })

    }

    function reject(reason) {
        if (_this.status !== "pending") return;
        _this.status = "rejected";
        _this.value = reason;
        //为了保证then中的onResolved函数永远是异步的，则我们给他包裹一层异步代码
        //保证onRejected执行的时候，then要已经执行过了
        setTimeout(() => {
            _this.callback.onRejected(reason);
        })
    }

    //当构造函数被实例化的时候 exector需要直接触发
    exector(resolve, reject);
}

//then在使用的时候是同步调用了，但是我们可以控制then中的函数是异步调用
myPromise.prototype.then = function (onResolved, onRejected) {
    const _this = this;

    //then方法一定会返回一个promise对象
    return new myPromise((resolve, reject) => {
        //封装两个函数onResolved，onRejected 给到实例化对象，让promise中的resolve和reject之后调用
        _this.callback.onResolved = function (value) {
            //当callback的函数调用之后，我们让then中的onResolved执行,拿到返回值，因为我们then的返回值要看回调函数的返回值
            //但是onResolved调用可能会报错，如果报错，则直接返回一个失败的promise对象，值是报错信息
            try {
                const re = onResolved(value);
                //判断onResolved返回值是promise对象吗
                if (re instanceof myPromise) {
                    //如果re是promise对象，re成功则调用resolve  re失败则调用reject
                    //不能通过re.status判断re是成功还是失败，因为onResolved函数调用的时候，内部可能有异步代码改变promise状态
                    //在这里可以直接使用then来监听re是成功还是失败
                    re.then(function (data) {
                        resolve(data);
                    }, function (reason) {
                        reject(reason)
                    });
                } else {
                    resolve(re);
                }
            } catch (e) {
                //当then中的方法出错，则直接调用reject返回失败的promise对象
                reject(e);
            }

        };
        _this.callback.onRejected = function () {
            onRejected()
        };
    });



}