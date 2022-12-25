
const arr1 = [1, 2, 3]
const arr2 = [5, 6, 7]
function createArrayIterator(arr) {
    let index = 0;
    const arrayIterator = {
        next: function () {
            if (index < arr.length) {
                return {
                    done: false,
                    value: arr[index++]
                }

            } else {
                return {
                    done: true,
                    value: undefined
                }
            }
        }
    }

    return arrayIterator

}

const arr1Iterator = createArrayIterator(arr1)
const arr2Iterator = createArrayIterator(arr2)

console.log(arr1Iterator.next())
console.log(arr1Iterator.next())
console.log(arr1Iterator.next())
console.log(arr1Iterator.next())

console.log(arr2Iterator.next())
console.log(arr2Iterator.next())
console.log(arr2Iterator.next())
console.log(arr2Iterator.next())


// 创建一个无限的迭代器

function creatNumberIterator() {
    let index = 0
    return {
        next: function () {
            return {
                done: false,  // done 永远为false 是一个无限迭代器
                value: index++
            }
        }
    }
}