/**
 * resolve(参数)
 * 1.普通的值或者对象  pending -> fulfilled
 * 2.传入一个Promise  那么当前promise的状态由传入的Promise来决定  相当于状态进行了移交
 * 3.传入一个对象，并且这个对象有实现then方法(并且这个对象是实现了thenable)    那么也会执行该then方法，并且由该then方法决定后续状态
 */

// const newPromise = new Promise((resolve, reject) => {
//     // resolve('newPromise')
//     reject('reject')
// })

// // 1.resolve传入一个promise的情况
// new Promise((resolve, reject) => {
//     // resolve('resolve')
//     resolve(newPromise)

// }).then(res => {
//     console.log(res, 'res')  // resolve

// }, err => {
//     console.log(err, 'err')
// })



// 2.传入一个对象，这个对象有then方法
new Promise((resolve, reject) => {
    const obj = {
        then: function (resolve, reject) {
            // resolve('resolve====')
            reject('reject====')
        }
    }
    // resolve('resolve')
    resolve(obj)

}).then(res => {
    console.log(res, 'res')  // resolve

}, err => {
    console.log(err, 'err')
})


// eatable/runable


const obj = {
    eat: function () {

    },
    run: function () {

    }
}