// finally方法
// finally 是在ES9中新增的一个特性，表示Promise对象无论变成fullfiled还是reject状态，最终都会被执行的代码


const promise = new Promise((resolve, reject) => {
    // resolve('resolve')
    reject('reject')
})

promise.then(res => {
    console.log(res, 'res')
}).catch(err => {
    console.log(err, 'err')
}).finally(() => {
    console.log('finally')
})