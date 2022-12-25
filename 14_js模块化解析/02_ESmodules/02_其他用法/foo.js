// 第一种导出方式 export +声明语句
// export const fname = 'foo'
// export const age = 18
// export function foo() {
//     console.log('foo function')
// }

// export class Person {

// }


// 第二种 导出和声明分开

const fname = 'foo'
const age = 18
function foo() {
    console.log('foo function')
}

class Person {

}

export {
    fname,
    age,
    foo,
    Person
}

// 第三种，第二种导出时起别名

// export {
//     fname as ffname,
//     age as fage,
//     foo as ffoo,
//     Person
// }




