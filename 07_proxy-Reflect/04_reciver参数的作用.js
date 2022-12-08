const obj = {
    _name: 'abc',
    get name() {
        return this._name
    },
    set name(newValue) {
        this._name = newValue
    }

}


const objProxy = new Proxy(obj, {
    get: function (target, key, receiver) {
        // target是原始对象
        // receiver是创建出来的代理对象
        console.log('---', key)
        console.log(receiver === objProxy)  // true
        return Reflect.get(target, key, receiver)
    },
    set: function (target, key, newValue, receiver) {
        Reflect.set(target, key, newValue, receiver)

    }
})
objProxy.name = 'aaa'
console.log(objProxy.name)