// race 竞技，竞赛的意思
// 只要有一个Promise执行完了（变成fulfilled或者rejected），那么就结束
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
    }, 500);


});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('3333')
    }, 3000);


});

Promise.race([promise1, promise2, promise3]).then(res => {
    console.log(res, 'res')
}).catch(err => {
    console.log(err, 'err')
})
