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
                this.value = value
                console.log('resolve被调用')
                console.log(value)

            }


        }
        const reject = (reason) => {

            if (this.status === PROMISE_STATUS_PENDING) {
                this.status = PROMISE_STATUS_REJECTED
                this.reason = reason
                console.log('reject被调用')


            }


        }
        console.log(this.status)
        exector(resolve, reject)
        console.log(this.status)

    }

}

const promise = new MYPromise((resolve, reject) => {
    console.log('传入的函数被直接调用了')
    resolve('000')
    reject()

})