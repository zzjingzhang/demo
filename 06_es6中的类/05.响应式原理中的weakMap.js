var obj1 = {
    name: '111',
    age: 18
}
var obj2 = {
    name: '222',
    age: 28
}

function obj1NameFn1() {
    console.log('obj1NameFn1被执行')
}
function obj1NameFn2() {
    console.log('obj1NameFn2被执行')
}

function obj1AgeFn1() {
    console.log('obj1AgeFn1被执行')
}
function obj1AgeFn2() {
    console.log('obj1AgeFn2被执行')
}


function obj2NameFn1() {
    console.log('obj2NameFn1被执行')
}
function obj2NameFn2() {
    console.log('obj2NameFn2被执行')
}

function obj2AgeFn2() {
    console.log('obj2AgeFn2被执行')
}
// 1.创建weakMap
const weakMap = new WeakMap()

// 2收集依赖结构
// 2.1 对obj1收集的数据结构
const obj1Map = new Map()
obj1Map.set('name', [obj1NameFn1, obj1NameFn2])
obj1Map.set('age', [obj1AgeFn1, obj1AgeFn2])
weakMap.set(obj1, obj1Map)
// console.log(obj1Map)
// console.log(weakMap)

// // 2.2 对obj2收集的数据结构
const obj2Map = new Map()
obj2Map.set('name', [obj2NameFn1, obj2NameFn2])
weakMap.set(obj2, obj2Map)


// 如果obj1.name发生了改变
// Proxy/Object.defineProperty
obj1.name = 'james'
const targetMap = weakMap.get(obj1)
const fns = targetMap.get('name')
fns.forEach(item => item())
// console.log(targetMap)
// console.log(fns[0])
// fns[0]()
