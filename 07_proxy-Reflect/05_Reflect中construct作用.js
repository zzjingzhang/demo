function Student(name, age) {
    this.name = name
    this.age = age
}

function Teacher() {

}

// const stu = new Student('aaa', 18)
// console.log(stu)

// 执行Student函数中的内容，但是创建出来的对象是Teacher对象
const obj = Reflect.construct(Student, ['aaa', 18], Teacher)
console.log(obj)