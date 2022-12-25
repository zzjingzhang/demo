// 宏任务队列 macrotask queue   定时器-ajax请求-dom监听-UI Rendering等
// 微任务队列 microtask queue  queueMicrotask()-promise的then回调-Mutatio Observer的API等


// 规范：在执行任何宏任务之前，要保证微任务队列已被清空

setTimeout(() => {
    console.log('setTimeout')

}, 1000);


queueMicrotask(() => {
    console.log('queueMicrotask')
})

Promise.resolve().then(() => {
    console.log('promise')
})

function foo() {
    console.log('foo')
}

function bar() {
    console.log('bar')
    foo()
}

bar()
console.log('other')