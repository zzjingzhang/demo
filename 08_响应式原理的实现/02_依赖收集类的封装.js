// 封装一个响应式函数
class Depend {
    constructor() {
        this.reactiveFns = []
    }

    addDepen(reactiveFn) {
        this.reactiveFns.push(reactiveFn)
    }

    notify() {
        this.reactiveFns.forEach(fn => {
            fn()
        })
    }

}

const depend = new Depend()
console.log(depend)
function watchFn(fn) {
    depend.addDepen(fn)
}

const obj = {
    name: 'aaa',
    age: 18
}
watchFn(function () {
    console.log('需要响应式')
    const newName = obj.name
    console.log('___')
    console.log(obj.name, 'name')
    console.log(newName, 'newName')
})

watchFn(function () {
    console.log(obj.name, 'demo-------')
})

function bar() {
    console.log('其他普通函数，不需要响应式')
}

obj.name = 'ccc'

depend.notify()