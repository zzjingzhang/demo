const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class MYPromise {

    constructor(exector) {
        this.status = PROMISE_STATUS_PENDING
        this.value = undefined
        this.reason = undefined
        const resolve = (value) => {

            if (this.status === PROMISE_STATUS_PENDING) {
                this.status = PROMISE_STATUS_FULFILLED
                // queueMicrotask将一个函数加入到微任务里面
                queueMicrotask(() => {
                    this.value = value
                    this.onFulfilled(this.value)
                    console.log('resolve被调用')
                    // 执行then传入的第一个回调函数

                });

            }


        }
        const reject = (reason) => {

            if (this.status === PROMISE_STATUS_PENDING) {
                this.status = PROMISE_STATUS_REJECTED
                queueMicrotask(() => {
                    this.reason = reason
                    this.onRejected(this.reason)
                    console.log('reject被调用')
                    // 执行then传入的第二个回调函数

                });


            }


        }
        exector(resolve, reject)

    }

    then(onFulfilled, onRejected) {
        this.onFulfilled = onFulfilled
        this.onRejected = onRejected
    }
}

const promise = new MYPromise((resolve, reject) => {
    console.log('传入的函数被直接调用了')
    // resolve('000')
    reject('reason')

})

// 执行then方法
promise.then(res => {
    console.log(res, 'res')

}, err => {
    console.log(err, 'err')

})