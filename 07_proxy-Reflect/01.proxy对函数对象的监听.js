function foo() {
    // console.log(this)

}



const fooProxy = new Proxy(foo, {
    apply: function (target, thisArg, argArray) {
        console.log('对foo函数进行了apply调用')
        return target.apply()

    },
    construct: function (target, argArray, newTarget) {
        console.log(...argArray)
        console.log('对foo函数进行了new调用')
        return new target(...argArray)

    }

})

// foo()
// foo.apply({}, ['abc'])
fooProxy.apply({}, ['abc', 'cba'])
new fooProxy('abc', 'cba')