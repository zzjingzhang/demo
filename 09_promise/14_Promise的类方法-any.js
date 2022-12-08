// any es12新增的方法，和race方法类似
// any方法会等到一个fulfilled状态，才会决定新Promise的状态
// 如果所有的Promise都是reject，那么也会等到所有的Promise都变成rejected状态

// 创建多个promise
const promise1 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('1111')
    // }, 1000); 
    setTimeout(() => {
        reject('reject 1')
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
    // setTimeout(() => {
    //    resolve('3333')
    // }, 3000);
    setTimeout(() => {
        reject('reject 3')
    }, 3000);


});

// race 竞技，竞赛的意思
// 只要有一个Promise执行完了（变成fulfilled），那么就结束
Promise.any([promise1, promise2, promise3]).then(res => {
    console.log(res, 'res')
}).catch(err => {
    console.log(err, 'err')
})
