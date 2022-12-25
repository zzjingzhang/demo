async function foo() {
    console.log('foo function start~')

    console.log('中间代码执行')
    console.log('foo function end~')
    // 1 返回一个值
    // 2.返回thenable
    // return {
    //     then: function (resolve, reject) {
    //         resolve('0000')
    //     }
    // }

    // 3.返回Promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('99999')
        }, 2000)

    })

}


// 异步函数的返回值一定是一个promise
const promise = foo()
promise.then(res => {
    console.log('promise then function exec')
})