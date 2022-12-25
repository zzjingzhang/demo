Promise.resolve().then(() => {
    console.log(0);
    // return 4
    // 不是普通的值，多加一次微任务
    // promise.resolve(4),多加一次微任务
    // 一共多加两次微任务
    return Promise.resolve(4)
}).then(res => {
    console.log(res)
});


Promise.resolve().then(() => {
    console.log(1);
}).then(() => {
    console.log(2);
}).then(() => {
    console.log(3);
}).then(() => {
    console.log(5)
}).then(() => {
    console.log(6)
})