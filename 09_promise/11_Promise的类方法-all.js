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


// 需求：所有的Promise都变成fulfilled时，再拿到结果
// 意外：在拿到所有结果之前，有一个Promise变成了rejected，那么整个Promise都是rejected
Promise.all([promise1, promise2, promise3]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
