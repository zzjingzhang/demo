const promise = Promise.reject('reject')

// 相当于
// const promise2 = new Promise((resolve, reject) => {
//     reject('reject')
// })

// 注意 无论传入什么值，都是一样的
const promise3 = Promise.reject({
    then: (resolve, reject) => {
        resolve('666')
    }
})

promise.then(res => {

}).catch(err => {
    console.log(err, 'err')
});
promise3.then(res => {

}).catch(err => {
    console.log(err, 'err')
})