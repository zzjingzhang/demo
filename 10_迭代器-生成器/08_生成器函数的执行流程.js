// 当遇到yield的时候，暂停函数的执行
// 当遇到return的时候，生成器停止执行

function* foo() {
    console.log('函数开始执行')
    const value1 = 10
    // console.log(value1, '第一段代码')
    yield value1

    const value2 = 20
    // console.log(value2, '第二段代码')
    yield value2   // 返回值可以在yield后面返回

    const value3 = 30
    // console.log(value3, '第三段代码')

    console.log('函数执行结束')

    return '123'

}
// 调用生成器函数时，会返回一个生成器对象
// generatorObj 本质上是一个特殊的iterator
const generatorObj = foo()
console.log(generatorObj)
console.log('返回值1', generatorObj.next())
console.log('返回值2', generatorObj.next())
console.log('返回值3', generatorObj.next())
