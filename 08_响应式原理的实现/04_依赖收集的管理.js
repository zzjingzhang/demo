
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


// 封装一个响应式函数
const depend = new Depend()
console.log(depend)
function watchFn(fn) {
    depend.addDepen(fn)
}

// 封装一个获取depend函数
const targetMap = new WeakMap()
function getDepend(target, key) {
    // 根据target对象，获取map的过程
    let map = targetMap.get(target)
    if (!map) {
        map = new Map()
        targetMap.set(target, map)

    }
    // 根据key获取depend对象
    let depend = map.get(key)
    if (!depend) {
        depend = new Depend()
        map.set(key, depend)

    }

    return depend
}




// 对象的响应式原理
const obj = {
    name: 'aaa',
    age: 18
}

// 监听对象的属性变化: Proxy(vue3的响应式原理)/Object.defineProperty(vue2的响应式原理)

const objProxy = new Proxy(obj, {
    get: function (target, key, receiver) {
        return Reflect.get(target, key, receiver)

    },
    set: function (target, key, newValue, receiver) {
        Reflect.set(target, key, newValue, receiver)
        const depend = getDepend(target, key)
        depend.notify()

    }
})



const info = {
    address: '武汉'
}

watchFn(function () {
    console.log(info.address, '监听addr变化-=====1')
})
watchFn(function () {
    console.log(info.address, '监听addr变化-=====2')
})


const objMap = new Map()



// info对象

// address：depend