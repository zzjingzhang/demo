const promise = new Promise((resolve, reject) => {

})
promise.then(res => {

}, err => {

})

// 完全等价于下面的代码
// 状态一旦确定下来，那么就是不可更改的（锁定）
new Promise((resolve, reject) => {

    // pending状态 :待定/悬而未决的
    console.log('------node')
    resolve('resolve')  // 处于fulfilled状态（已敲定/兑现状态）
    console.log('------resolve')
    reject('reject') // 处于rejected状态（已拒绝状态）
    console.log('------reject')
}).then(res => {
    console.log(res)

}, err => {
    console.log(err)

})

// promise的几个阶段
// 1.待定(pending):初始状态，既没有被兑现，也没有被拒绝；  当执行executor中的代码时，处于该状态
// 2.已兑现(fulfilled):意味着操作成功完成  执行了resolve时，处于该状态
// 3.已拒绝(rejected):意味着操作失败   执行了reject时，处于该状态