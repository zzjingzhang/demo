const promise = new Promise((resolve, reject) => {
    // reject('reject status')
    // throw new Error('reject status')
    resolve('000')

})

// 当executor抛出异常时，也是会调用错误(拒绝)捕获的回调函数的
promise.then(undefined, err => {
    console.log(err, 'err')
    console.log('......')
})

// 2.通过catch方法来传入错误(拒绝)捕获的回调函数
promise.catch(err => {
    console.log(err, 'err')  // reject status
})

// promise.then(res => {
//     // return new Promise((resolve, reject) => {
//     //     // reject('return reject')
//     //     throw new Error('err message')
//     // })
//     throw new Error('err message')
// }).catch(err => {
//     console.log('err', err)

// })


// catch方法的返回值   和then的返回值一样
const promise1 = new Promise((resolve, reject) => {
    reject('nj')
})

promise1.then(res => {

}).catch(err => {
    console.log(err, 'err1')
    return 'catch return value'
}).then(res => {
    console.log(res, 't')
}).catch(err => {
    console.log(err, 'ee')
})