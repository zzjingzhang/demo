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

    [Symbol.iterator]() {
        let index = 0
        return {
            next: () => {
                if (index < this.students.length) {
                    return { done: false, value: this.students[index++] }
                } else {
                    return { done: true, value: undefined }
                }
            },
            return: () => {
                console.log('迭代器提前终止了')
                return {
                    done: true, value: undefined
                }
            }
        }
    }
}

const classRoom = new ClassRoom('1栋1楼101', '计算机教学楼', ['a', 'b', 'c'])
classRoom.entry('d')
console.log(classRoom)

for (const stu of classRoom) {
    console.log(stu)
    if (stu === 'b') break
}