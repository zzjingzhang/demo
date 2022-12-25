async function foo() {
    console.log('foo function start~')

    console.log('中间代码执行')
    // 异步函数中的异常，会被作为异步函数返回的promise的reject值
    throw new Error('error message')
    console.log('foo function end~')


}
foo().catch(err => {
    console.log(err, 'err')
})
console.log('后续代码执行++++')  // 普通函数抛异常之后不会执行，异步函数抛异常之后仍会执行该段代码


