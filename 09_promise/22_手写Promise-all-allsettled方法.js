const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

// 工具函数
function execFunWithCatchError(execFn, value, resolve, reject,) {
    try {
        const result = execFn(value)
        resolve(result)

    } catch (err) {
        reject(err)
    }
}

class MYPromise {

    constructor(exector) {
        this.status = PROMISE_STATUS_PENDING
        this.value = undefined
        this.reason = undefined
        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []
        const resolve = (value) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                // queueMicrotask将一个函数加入到微任务里面
                queueMicrotask(() => {
                    if (this.status !== PROMISE_STATUS_PENDING) return
                    this.status = PROMISE_STATUS_FULFILLED
                    this.value = value
                    this.onFulfilledCallbacks.forEach(fn => {
                        let value = fn(this.value)
                    })
                });
            }
        }
        const reject = (reason) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                queueMicrotask(() => {
                    if (this.status !== PROMISE_STATUS_PENDING) return
                    this.status = PROMISE_STATUS_REJECTED
                    this.reason = reason
                    this.onRejectedCallbacks.forEach(fn => {
                        fn(this.reason)
                    })
                });
            }
        }
        try {
            exector(resolve, reject)

        } catch (err) {
            reject(err)
        }

    };

    then(onFulfilled, onRejected) {


        return new MYPromise((resolve, reject) => {
            const defaultOnRejected = err => { throw err }
            onRejected = onRejected || defaultOnRejected;

            const defaultOnFulfilled = value => value
            onFulfilled = onFulfilled || defaultOnFulfilled;
            // 1.如果在then调用的时候，状态已经确定下来了
            if (this.status === PROMISE_STATUS_FULFILLED) {
                execFunWithCatchError(onFulfilled, this.value, resolve, reject)

            }
            if (this.status === PROMISE_STATUS_REJECTED) {
                execFunWithCatchError(onRejected, this.reason, resolve, reject)

            }

            // 2.

            if (this.status === PROMISE_STATUS_PENDING) {

                this.onFulfilledCallbacks.push(() => {
                    execFunWithCatchError(onFulfilled, this.value, resolve, reject)

                })

                this.onRejectedCallbacks.push(() => {
                    execFunWithCatchError(onRejected, this.reason, resolve, reject)
                })



            }
        })

    };
    catch(onRejected) {
        return this.then(undefined, onRejected)

    };

    finally(onFinally) {
        this.then(() => {
            onFinally()
        }, () => {
            onFinally()
        })
    };

    static resolve(value) {
        return new MYPromise((resolve) => resolve(value))
    };
    static reject(reason) {
        return new MYPromise((resolve, reject) => reject(reason))
    };

    static all(promises) {

        return new MYPromise((resolve, reject) => {
            // 问题关键  什么时候执行resolve，什么时候执行reject
            const values = []
            promises.forEach(promise => {
                promise.then(res => {
                    values.push(res)
                    if (values.length === promises.length) {
                        resolve(values)
                    }

                }, err => {
                    reject(err)

                })
            })

        })

    };

    static allSettled(promises) {
        return new MYPromise((resolve, reject) => {
            const results = []
            promises.forEach(promise => {
                promise.then(res => {
                    results.push({ status: PROMISE_STATUS_FULFILLED, value: res })
                    if (results.length === promises.length) {
                        resolve(results)

                    }
                }, err => {
                    results.push({ status: PROMISE_STATUS_REJECTED, reason: err })
                    if (results.length === promises.length) {
                        resolve(results)

                    }

                })
            })

        })

    }
}


const p1 = new MYPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolve1')

    }, 1000);

})
const p2 = new MYPromise((resolve, reject) => {
    setTimeout(() => {
        reject('resolve2')

    }, 2000);
})
const p3 = new MYPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolve3')

    }, 3000);
})
// MYPromise.all([p1, p2, p3]).then(res => {
//     console.log(res, 'all')
// }).catch(err => {
//     console.log(err, 'err')
// })
MYPromise.allSettled([p1, p2, p3]).then(res => {
    console.log(res, 'all')
})
