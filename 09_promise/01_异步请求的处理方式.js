// 这种回调方式有很多弊端
// 1.如果是我们自己封装的requestData，那么我们在封装的时候必须要自己设计好callback名称，并且使用好
// 2.如果是使用别人或者三方库封装的requestData,我们必须去看源码或者看文档，才知道这个函数需要怎么去获取到结果


// 更好的解决方案 Promise承诺（规范好了所有的代码编写逻辑）


function requestData(url, successCallback, failtureCallback) {
    // 模拟异步请求
    setTimeout(() => {
        // 拿到请求的结果

        //  url传入的是www，请求成功
        if (url === 'www') {
            let names = ['abc', 'cba', 'bac']
            successCallback(names)
        } else { // 否则请求失败
            failtureCallback('请求失败')
        }
    }, 3000)
}


requestData('333', (result) => {
    console.log(result)

}, (err) => {
    console.log(err)

})