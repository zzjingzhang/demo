// 生成器函数也是一个函数，但是和普通函数有一些区别
// 首先，生成器函数需要在function后面加一个符号:*
// 其次，生成器函数可以通过yield关键字来控制函数的执行流程
// 最后，生成器函数的返回值是一个Generator(生成器)
// 生成器事实上是一种特殊的迭代器
// MDN:Instead,they return a special type of iterator,called a Generator;


function* foo() {
    console.log('函数开始执行')
    const value1 = 10
    console.log(value1, '第一段代码')
    yield

    const value2 = 20
    console.log(value2, '第二段代码')
    yield

    const value3 = 30
    console.log(value3, '第三段代码')

    console.log('函数执行结束')

}
// 调用生成器函数时，会返回一个生成器对象
const generatorObj = foo()
console.log(generatorObj)
generatorObj.next()
generatorObj.next()
generatorObj.next()