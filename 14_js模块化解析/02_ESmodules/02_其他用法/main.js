// 1.导入方式一：普通导入
// import { fname, age, foo, Person } from './foo.js'  // .js不能省
// console.log(fname)
// console.log(age)
// foo()
// const p = new Person()
// console.log(p)
// import { ffname, fage, ffoo, Person } from './foo.js'  // .js不能省
// console.log(ffname)
// console.log(fage)
// ffoo()
// const p = new Person()
// console.log(p)

// 2.导入方式二 起别名

// import { ffname as fname, fage, ffoo, Person } from './foo.js'  // .js不能省
// console.log(fname)


// 3.第三种方式：将导出的所有内容放到一个标识符中

import * as foo from './foo.js'
console.log(foo.fname + '0000')