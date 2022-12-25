// 迭代器是一个对象，需要符合迭代器协议(iterator protocol)
// 可迭代对象 是一个对象  符合可迭代协议(iterable protocol),这个对象的要求是必须实现@@iterator方法，在代码中
// 我们使用 Symbol.iterator访问该属性



// 创建一个可迭代对象

const iterableObj = {
    names: ['abc', 'bca', 'acb'],
    [Symbol.iterator]: function () {
        let index = 0
        return {
            next: () => {
                if (index < this.names.length) {
                    return { done: false, value: this.names[index++] }
                } else {
                    return { done: true, value: undefined }
                }
            }

        }
    }

}
for (const item of iterableObj) {
    console.log(item)
}

// interableObj 是一个可迭代对象


// const iterator = interableObj[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// const iterator1 = interableObj[Symbol.iterator]()   // 每次调用都是生成一个新的迭代器
// console.log(iterator1.next())
// console.log(iterator1.next())
// console.log(iterator1.next())
// console.log(iterator1.next())

// for...of可遍历的东西必须是一个可迭代对象
// const obj = {
//     name: '111'
// }


