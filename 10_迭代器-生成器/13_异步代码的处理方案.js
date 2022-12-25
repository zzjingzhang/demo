function requestData(url) {
    return new Promise((resolve, reject) => {
        // 模拟异步请求
        setTimeout(() => {
            // 拿到请求的结果
            resolve(url)
        }, 2000);
    })



}

// 需求
// 1 url: www => res:www
// 2.url:res + 'aaa' => res:wwwaaa
// 3.url:res + 'bbb' => res:wwwaaabbb

// promise + generator 实现
// function* getData() {
//     const res1 = yield requestData('www')
//     const res2 = yield requestData(res1 + 'aaa')
//     const res3 = yield requestData(res2 + 'bbb')
//     const res4 = yield requestData(res3 + 'ccc')
//     console.log(res4)

// }

// 1.手动实现
// const generator = getData()
// generator.next().value.then(res => {
//     console.log(res)
//     generator.next(res).value.then(res2 => {
//         console.log(res2)
//         generator.next(res2).value.then(res3 => {
//             console.log(res3)
//         })
//     })
// })


// 2.封装函数，自动执行
// function execGenerator(genFn) {
//     const generator = genFn()
//     function exec(res) {
//         const result = generator.next(res)
//         if (result.done) {
//             return result.value
//         }

//         result.value.then(res => {
//             console.log(res)
//             exec(res)
//         })
//     }
//     exec()

// }

// execGenerator(getData)

// 第三种npm包
// npm install co
// const co = require('co')
// co(getData)


// 第四种
// async/await

async function getData() {
    const res1 = await requestData('www')
    const res2 = await requestData(res1 + 'aaa')
    const res3 = await requestData(res2 + 'bbb')
    const res4 = await requestData(res3 + 'ccc')
    console.log(res4)

}

getData()