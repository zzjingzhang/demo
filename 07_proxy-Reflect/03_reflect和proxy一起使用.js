const obj = {
    name: 'qqq',
    age: 18
}

const objProxy = new Proxy(obj, {
    get: function (target, key, receiver) {
        return Reflect.get(target, key)
    },
    set: function (target, key, newValue, receiver) {
        // target[key] = newValue  这种方式无法判断值是否设置成功
        const result = Reflect.set(target, key, newValue)  // 返回一个布尔值，告知值是否设置成功
        if (result) {

        } else {

        }
    }
})
objProxy.name = 'aaa'
console.log(obj)