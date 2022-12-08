const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

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
        exector(resolve, reject)

    }

    then(onFulfilled, onRejected) {
        // 1.如果在then调用的时候，状态已经确定下来了
        if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
            onFulfilled(this.value)
        }
        if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
            onRejected(this.reason)
        }

        // 2.

        if (this.status === PROMISE_STATUS_PENDING) {
            this.onFulfilledCallbacks.push(onFulfilled)
            this.onRejectedCallbacks.push(onRejected)
        }

    }
}

const promise = new MYPromise((resolve, reject) => {
    console.log('传入的函数被直接调用了')
    resolve('000')
    reject('reason')

})

// 执行then方法
promise.then(res => {
    console.log(res, 'res1')

}, err => {
    console.log(err, 'err1')

});
promise.then(res => {
    console.log(res, 'res2')

}, err => {
    console.log(err, 'err2')

});

// 在确定Promise状态之后。再次调用then
setTimeout(() => {
    promise.then(res => {
        console.log(res, 'setTimeout res')
    }, err => {
        console.log(err, 'setTimeout err')

    })

}, 1000);