const obj = {
    name: 'qqq',
    age: 18
}

const objProxy = new Proxy(obj, {
    get: function (target, key, receiver) {
        return target[key]
    },
    set: function (target, key, newValue, receiver) {
        target[key] = newValue
    }
})
objProxy.name = 'aaa'
console.log(obj)