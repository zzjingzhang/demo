// 封装一个响应式函数
let reactiveFns = []
function watchFn(fn) {
    reactiveFns.push(fn)

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

reactiveFns.forEach(fn => {
    fn()
})