// 迭代器是一个对象，需要符合迭代器协议(iterator protocol)
// 可迭代对象 是一个对象  符合可迭代协议(iterable protocol),这个对象的要求是必须实现@@iterator方法，在代码中
// 我们使用 Symbol.iterator访问该属性


// 编写的一个迭代器对象
const iterator = {
    next: function () {
        return {
            done: true,
            value: 123
        }
    }
}


const names = ['abc', 'bca', 'acb']


// 创建一个迭代器对象来访问数组
let index = 0
const namesIterator = {
    next: function () {
        if (index < names.length) {
            return {
                done: false,
                value: names[index++]

            }


        } else {
            return {
                done: true,
                value: undefined
            }
        }

    }
}
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())