// then方法 -- 接受两个参数
// then方法是Promise对象上的一个方法：它其实是放在Promise的原型上的 Promise.prototype.then  
// Prmomise 有哪些对象方法
console.log(Object.getOwnPropertyDescriptors(Promise.prototype))

class Person {
    constructor(executor) {
        const resolve = () => {
            this.callback()

        }
        const reject = () => {

        }
        executor(resolve, reject)

    }

    then(callback) {
        this.callback = callback
    }
}

const promise = new Promise((resolve, reject) => {
    resolve('9999')

})


// 1.同一个Promise可以被多次调用then方法
// 当resolve方法被回调时，所有的then方法传入的回调函数都会被调用
promise.then((res1) => {
    console.log(res1, 'res1')

})
promise.then((res2) => {
    console.log(res2, 'res2')

})
promise.then((res3) => {
    console.log(res3, 'res3')

})
promise.then((res4) => {
    console.log(res4, 'res4')

})


// 2.then方法传入的回调函数是可以有返回值的
// then方法本身是有返回值的，它的返回值是Promise
//     ①如果返回的是一个普通值(数字/字符串/普通对象/undefined)，那么这个普通的值被作为一个新的Promise的resolve值
promise.then(res => {
    return '111'  // ===> return new Promise((resolve,reject)=>{resolve('111')})
}).then(res => {
    console.log(res) // 111
})
// ② 如果返回的是一个Promise
promise.then(res => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('0000')
        }, 2000)
    })
}).then(res => {
    console.log(res) /// 0000
})

// ③  如果返回的是一个对象，并且该对象实现了thenable
promise.then(res => {
    return {
        then: (resolve, reject) => {
            resolve('87')

        }
    }
}).then(res => {
    console.log(res, 'resobj')  // 87
})