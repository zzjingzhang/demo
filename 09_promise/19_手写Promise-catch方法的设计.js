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
                        fn(this.value)
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

    }

    then(onFulfilled, onRejected) {


        return new MYPromise((resolve, reject) => {
            const defaultOnRejected = err => { throw err }
            onRejected = onRejected || defaultOnRejected;
            // 1.如果在then调用的时候，状态已经确定下来了
            if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
                execFunWithCatchError(onFulfilled, this.value, resolve, reject)

            }
            if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
                execFunWithCatchError(onRejected, this.reason, resolve, reject)

            }

            // 2.

            if (this.status === PROMISE_STATUS_PENDING) {
                if (onFulfilled) {
                    this.onFulfilledCallbacks.push(() => {
                        execFunWithCatchError(onFulfilled, this.value, resolve, reject)

                    })
                }
                if (onRejected) {
                    this.onRejectedCallbacks.push(() => {
                        execFunWithCatchError(onRejected, this.reason, resolve, reject)
                    })

                }

            }
        })

    }
    catch(onRejected) {
        this.then(undefined, onRejected)

    }
}

const promise = new MYPromise((resolve, reject) => {
    console.log('传入的函数被直接调用了')
    // resolve('000')
    reject('reason')
    // throw new Error('executor err')

})

// 调用then方法，多次执行
promise.then(res => {
    console.log(res, 'res1')
    // return 'aa'
    // throw new Error('err message')

}).catch(err => {
    console.log(err, 'err2')

});
