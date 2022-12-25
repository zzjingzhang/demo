// 使用另外一个模块导出的对象，那么就要进行导入 require
const { age, fname, sum } = require('./a')
console.log(age)
console.log(fname)

console.log(sum(10, 20))