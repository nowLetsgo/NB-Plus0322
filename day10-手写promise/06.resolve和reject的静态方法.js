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
            //因为并不是每一次的resolve方法都要执行then 所以并不是每一次都有onResolved方法，所以需要判断
            _this.callback.onResolved && _this.callback.onResolved(value);
            // _this.callback?.onResolved(value);
        })

    }

    function reject(reason) {
        if (_this.status !== "pending") return;
        _this.status = "rejected";
        _this.value = reason;
        //为了保证then中的onResolved函数永远是异步的，则我们给他包裹一层异步代码
        //保证onRejected执行的时候，then要已经执行过了
        setTimeout(() => {
            _this.callback.onRejected && _this.callback.onRejected(reason);
        })
    }

    //当构造函数被实例化的时候 exector需要直接触发
    exector(resolve, reject);
}

//then在使用的时候是同步调用了，但是我们可以控制then中的函数是异步调用
myPromise.prototype.then = function (onResolved, onRejected) {
    const _this = this;

    //用户在then的时候 可能不传递第二个参数函数，所以我们需要进行一个处理
    onRejected = typeof onRejected !== "function" ? function (reason) {
        //如果用户没有传递第二个参数，则我们处理第二个参数的时候，直接把调用then的失败的信息返回即可
        throw reason;
    } : onRejected;

    //catch其实就是then不传递第一个参数，但是可能会有成功的promise调用catch，需要对第一个参数处理
    onResolved = typeof onResolved !== "function" ? function (value) {
        return value;
    } : onResolved;

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
                    })
                } else {
                    resolve(re);
                }
            } catch (e) {
                //当then中的方法出错，则直接调用reject返回失败的promise对象
                reject(e);
            }

        };
        _this.callback.onRejected = function (reason) {
            try {
                const re = onRejected(reason);
                if (re instanceof myPromise) {
                    re.then((value) => {
                        resolve(value)
                    }, (reason) => {
                        reject(reason)
                    })
                } else {
                    resolve(re)
                }
            } catch (e) {
                reject(e);
            }
        };
    });

}


//catch处理
myPromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
}

//finally处理
myPromise.prototype.finally = function (onResolved) {
    //finally的返回值 主要是看调用finally方法的promise对象
    //this是调用finally方法的promise对象
    //this有两种状态，成功或者失败，我们要分别处理,使用then即可
    return this.then((value) => {
        //当调用finally的是成功的promise对象的时候
        //不要传参，因为finally接受不到参数的
        const re = onResolved();
        //判断re是不是promise对象
        if (re instanceof myPromise) {
            //then方法只写一个参数的时候，如果成功调用，则返回成功，如果失败调用则一定返回失败
            return re.then(() => {
                return value;
            })
        } else {
            return value;
        }
    }, (reason) => {
        const re = onResolved();
        if (re instanceof myPromise) {
            return re.then(() => {
                //计算re是成功的 finally也会返回失败
                throw reason;
            })
        } else {
            //只要报错 则then直接返回失败的promis对象
            throw reason;
        }
    })
}


//resolve静态方法
//当resolve方法的参数无论是一个成功的promise对象，或者失败的promise 对象，则resolve的返回值就都是这个promise对象
myPromise.resolve = function (value) {
    return new myPromise((resolve, reject) => {
        //判断value是不是一个promise对象
        if (value instanceof myPromise) {
            //根据value的promise的情况 调用resolve或reject
            value.then((value) => {
                resolve(value)
            }, (reason) => {
                reject(reason);
            })
        } else {
            resolve(value)
        }
    })
}

//reject静态方法
myPromise.reject = function (reason) {
    return new myPromise((resolve, reject) => {
        //无论reject的参数是什么都是，都是失败promise对象的值
        reject(reason);
    })
}



