function isObject(value) {
    const valueType = typeof value
    return (value !== null) && (valueType === 'object' || valueType === 'function')

}


function deepClone(originValue) {
    // 判断是否是一个Set类型
    if (originValue instanceof Set) {
        return new Set([...originValue])
    }
    // 判断是否是一个Map类型
    if (originValue instanceof Map) {
        return new Map([...originValue])
    }
    // 判断如果是symbol的value,那么创建一个新的symbol
    if (typeof originValue === 'symbol') {
        return Symbol(originValue.description)
    }
    // 判断如果是函数类型,那么直接使用同一个函数
    if (typeof originValue === 'function') {
        return originValue
    }
    // 判断传入的originValue是否是一个对象类型
    if (!isObject(originValue)) {
        return originValue
    }
    // 判断传入的对象是数组还是对象
    const newObject = Array.isArray(originValue) ? [] : {}
    for (const key in originValue) {
        newObject[key] = deepClone(originValue[key])
    }

    // 对symbol的key进行特殊的处理
    const symbolKeys = Object.getOwnPropertySymbols(originValue)
    for (const skey of symbolKeys) {
        // const newSkey = Symbol(skey.description)
        // newObject[newSkey] = deepClone(originValue[skey])
        newObject[skey] = deepClone(originValue[skey])

    }
    return newObject
}


// 测试代码
let s1 = Symbol('aaa')
let s2 = Symbol('bbbb')
const obj = {
    name: '11',
    age: 18,
    friend: {
        name: 'cc',
        age: 20
    },
    // 数组类型
    hobbies: ['abc', 'cba'],
    // 函数类型
    foo: function () {
        console.log('foo function')
    },
    // symbol 作为key 和value
    [s1]: 'abc',
    s2: s2,
    // Set/Map
    set: new Set(['c', 'b', 'a', 'd']),
    map: new Map([['d', 'e'], ['f', 'g']])
}

const newObj = deepClone(obj)
console.log(newObj)
// console.log(newObj === obj)