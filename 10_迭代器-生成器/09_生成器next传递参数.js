// 当遇到yield的时候，暂停函数的执行
// 当遇到return的时候，生成器停止执行

function* foo(num) {
    console.log('函数开始执行')
    const value1 = 10 * num  // 第一个参数来自调用函数的时候传递
    // console.log(value1, '第一段代码')
    const n = yield value1  // n是第二次调用next ，generatorObj.next(10) 传过来的参数 

    const value2 = 20 * n
    // console.log(value2, '第二段代码')
    yield value2   // 返回值可以在yield后面返回

    const value3 = 30
    // console.log(value3, '第三段代码')

    console.log('函数执行结束')

    return '123'

}
// 调用生成器函数时，会返回一个生成器对象
// generatorObj 本质上是一个特殊的iterator

// 1.生成器上的next方法可以传递参数
const generatorObj = foo(5)
console.log(generatorObj)
console.log('返回值1', generatorObj.next())


// 第二段代码，应该是第二次调用next的时候执行的
console.log('返回值2', generatorObj.next(10))
console.log('返回值3', generatorObj.next())


// 2.生成器是可以跑出异常的