// async function foo() {
//     await '表达式  返回一个promise'


// }
// 1 await 跟上一个表达式
function requestData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('resolve')
            reject('reject')

        }, 1000);

    })
}


// async function foo() {
//     const res1 = await requestData()
//     console.log('res1 后面的代码', res1)

//     const res2 = await requestData()
//     console.log('res2 后面的代码', res1)
// }



// 2 await跟上其他值

// async function foo() {
//     // const res1 = await 123
//     // console.log(res1, 'res1')

//     // const res2 = await {
//     //     then: function (resolve, reject) {
//     //         resolve('8888')

//     //     }
//     // }
//     // console.log(res2, 'res2')
//     const res3 = await new Promise(resolve => {
//         resolve('9999')
//     })
//     console.log(res3)
// }


// 3 reject值
async function foo() {
    const res = await requestData()
    console.log(res)
    // res.then().catch(err => {
    //     console.log(err)
    // })

}
foo().catch(err => {
    console.log(err)
})



