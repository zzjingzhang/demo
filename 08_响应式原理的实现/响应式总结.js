// 1.什么是响应式
// 2.响应式函数的封装
function watchFn(fn) { };

// 3.depend类的封装
class Depend {
    constructor() {
        this.reactiveFns = []
    }

    addDepen(reactiveFn) {
        this.reactiveFns.push(reactiveFn)
    }

    notify() {
        this.reactiveFns.forEach(fn => {
            fn()
        })
    }

}

// 4.监听对象的变化
new Proxy()

// 5.依赖收集的数据结构
