// 1. for of 场景

// 2 展开语法  


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
const names = [1, 2, 3]
const newNames = [...names, ...iterableObj]
console.log(newNames)


const obj = {
    fname: '123',
    age: 18
}

// es9新增的特性
const newObj = { ...obj } // 用的不是迭代器
console.log(newObj)


// 解构

const [name1, name2] = names
console.log(name1, name2)
