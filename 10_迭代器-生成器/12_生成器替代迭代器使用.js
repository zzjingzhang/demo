
// 迭代器
// function createArrayIterator(arr) {
//     let index = 0;
//     const arrayIterator = {
//         next: function () {
//             if (index < arr.length) {
//                 return {
//                     done: false,
//                     value: arr[index++]
//                 }

//             } else {
//                 return {
//                     done: true,
//                     value: undefined
//                 }
//             }
//         }
//     }

//     return arrayIterator

// }

// 生成器替代迭代器
function* createArrayIterator(arr) {
    // 写法1
    // for (const item of arr) {
    //     yield item
    // }


    // 写法二
    // yield*  后面跟一个可迭代对象
    yield* arr


}

const names = ['abc', 'bca', 'acb']

const nameIterator = createArrayIterator(names)
console.log(nameIterator.next())
console.log(nameIterator.next())
console.log(nameIterator.next())
console.log(nameIterator.next())

// 创建一个函数，这个函数可以迭代一个范围内的数字

function* createRangeIterator(start, end) {
    let index = start
    // return {
    //     next: function () {
    //         if (index < end ) {
    //             return { done: false, value: index++ }
    //         } else {
    //             return { done: true, value: undefined }
    //         }
    //     }
    // }
    while (index < end) {
        yield index++
    }
}

const rangeIterator = createRangeIterator(5, 10)
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())



// 创建一个教室类

class ClassRoom {
    constructor(address, name, students) {
        this.address = address
        this.name = name
        this.students = students
    }

    entry(newStudent) {
        this.students.push(newStudent)
    }

    // [Symbol.iterator] = function* () {
    //     yield* this.students
    // }
    *[Symbol.iterator]() {
        yield* this.students
    }
}

const classRoom = new ClassRoom('1栋1楼101', '计算机教学楼', ['a', 'b', 'c'])
classRoom.entry('d')
console.log(classRoom)

for (const stu of classRoom) {
    console.log(stu, 'stu')
    // if (stu === 'b') break
}