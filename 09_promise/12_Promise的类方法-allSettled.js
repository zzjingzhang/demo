// allSettled es11新增的方法
// 该方法会在所有的Promise都有结果(settled),无论是fulfilled还是rejected时，才会有最终的状态
// 并且这个Promise的结果一定是fulfilled的
// 创建多个promise
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('1111')
    }, 1000);


});
const promise2 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('2222')
    // }, 2000);
    setTimeout(() => {
        reject('reject 2')
    }, 2000);


});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('3333')
    }, 3000);


});


Promise.allSettled([promise1, promise2, promise3]).then(res => {
    console.log(res, 'res')
}).catch(err => {
    console.log(err, 'err')
})
