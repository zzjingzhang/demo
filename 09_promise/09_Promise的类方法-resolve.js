
// 转成Promise对象
// function foo() {
//     const obj = {
//         name: '222'
//     }
//     return new Promise(resolve => {
//         resolve(obj)
//     })
// }

// foo().then(res => {
//     console.log(res)
// })
const obj = {
    name: '222'
}
const promise = Promise.resolve(obj)
console.log(promise)
promise.then(res => {
    console.log(res)
})

// 相当于
const promise2 = new Promise(resolve => {
    resolve(obj)
})
console.log(promise2)


// 2.传入Promise

const promise3 = Promise.resolve(new Promise((resolve, reject) => {
    resolve('8888')
}))

promise3.then(res => {
    console.log(res)
})


// 3.传入thenable对象
