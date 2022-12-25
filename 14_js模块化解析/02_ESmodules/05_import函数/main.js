// import { fname, age, foo } from './foo.js'  // 会阻塞后面的代码运行
// console.log(fname)
// console.log(age)
// console.log(foo)



// import()函数返回的结果是一个promis
import('./foo.js').then(res => {
    console.log(res)
})   // 不会阻塞后面的代码运行

console.log('后面的代码')


// ES11新增的特性
// meta属性本身也是一个对象{url:当前模块所在的路径}
console.log(import.meta)



