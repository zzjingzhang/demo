function foo() {
    throw new Error('foo error message')
}


// 1.第一种是不处理，bar函数会继续将收到的异常直接抛出去
function bar() {
    foo()
}

function test() {
    try {
        bar()

    } catch (err) {
        console.log(err.message)
    } finally {
        console.log('finally') // 最后不管成功与否都会执行
    }

}

function demo() {
    test()
}



// 两种处理方法
// 1.第一种是不处理，那么异常会进一步抛出，直到最顶层的调用
// 如果在最顶层也没有对这个异常进行处理，那么我们的程序就会终止执行，并且报错

// 2 使用try catch 捕获异常
demo()

console.log('后续代码执行')