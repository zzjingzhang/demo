const fname = 'a'
const age = 18

function sum(num1, num2) {
    return num1 + num2
}

// 1.导出方案 module.exports

module.exports = {
    age,
    fname,
    sum
}