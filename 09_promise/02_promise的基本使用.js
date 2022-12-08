function baz() {
    return new Promise((resolve, reject) => {
        // resolve('999')
        reject('err')
    })
}
const bazPromise = baz()
console.log(bazPromise)
// then方法传入的回调函数，会在promise执行resolve函数时,被回调
// catch方法传入的回调函数，会在promise执行reject函数时,被回调
bazPromise.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})






class Person {
    constructor(callback) {
        let foo = function () {
            console.log('foo')
            return 'foo'

        }
        let bar = function () {
            console.log('bar')

        }
        callback(foo, bar)
    }
}


const p = new Person((foo, bar) => {
    foo()
    bar()
})
//  p.then(res=>{
//     console.log(res)
//  })


// 传入的这个函数，被称之为executor
// resolve：回调函数  在成功时，回调resolve函数
// reject 回调函数  失败时，回调reject函数
const promise = new Promise((resolve, reject) => {
    resolve('000')
    // reject()
    console.log('promise 传入的函数被执行了')
}
)

promise.then(res => {
    console.log(res)
})