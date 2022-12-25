const names = ['abc', 'bca', 'acb']
console.log(names[Symbol.iterator])
const iterator1 = names[Symbol.iterator]()
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())


const set = new Set()
set.add(10)
set.add(100)
set.add(1000)

for (const item of set) {
    console.log(item)
}


// 函数中的argument也是一个可迭代对象
