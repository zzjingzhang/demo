

function* foo() {
    console.log('代码开始执行')
    const value1 = 10
    try {
        yield value1
    } catch (err) {
        console.log('异常', err)

    }



    console.log('第二段代码继续执行')
    const value2 = 20
    yield value2
    console.log('代码执行结束')
}

const generatorObj = foo(5)
console.log(generatorObj.next())
console.log(generatorObj.throw('error message'))
