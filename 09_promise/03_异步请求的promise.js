function requestData(url) {


    return new Promise((resolve, reject) => {
        // 模拟异步请求
        setTimeout(() => {
            // 拿到请求的结果

            //  url传入的是www，请求成功
            if (url === 'www') {
                let names = ['abc', 'cba', 'bac']
                resolve(names)

            } else { // 否则请求失败
                let message = '请求失败，url错误'
                reject(message)

            }
        }, 3000);
    })



}


const promise = requestData('22');
// 写法一
promise.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
});

// // 写法er
promise.then((res) => {
    console.log(res)
}, (err) => {
    console.log(err)

})