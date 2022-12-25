// 自定义事件总线属于一种观察者模式，其中包括三个角色
// 发布者(Publisher):发出事件(event)
// 订阅者(Subscriber):订阅事件(event),并且会进行响应(handler)
// 事件总线(EventBus):无论是发布者还是订阅者都是通过事件总线作为中台的

class MYEventBus {
    constructor() {
        this.eventBus = {}

    }
    on(eventName, eventCallback, thisArg) {
        let handlers = this.eventBus[eventName]
        if (!handlers) {
            handlers = []
            this.eventBus[eventName] = handlers
        }
        handlers.push({
            eventCallback,
            thisArg
        })


    }

    off(eventName, eventCallback) {
        const handlers = this.eventBus[eventName]
        if (!handlers) return
        const newHandlers = [...handlers]
        for (let i = 0; i < newHandlers.length; i++) {
            const handler = newHandlers[i]
            if (handler.eventCallback === eventCallback) {
                const index = handlers.indexOf(handler)
                handlers.splice(index, 1)
            }
        }


    }

    emit(eventName, ...payload) {
        const handlers = this.eventBus[eventName]
        if (!handlers) return
        handlers.forEach(handler => {
            handler.eventCallback.apply(handler.thisArg, payload)
        })

    }

}


const eventBus = new MYEventBus()
// main.js 
eventBus.on('abc', function () {
    console.log('监听abc', this)

}, { name: '3333', age: 18 })
const handleCallback = function () {
    console.log('监听abc', this)
}
eventBus.on('abc', handleCallback, { name: 'bbb', age: 20 })
// utils.js
eventBus.emit('abc', 123)

// 移出监听
eventBus.off('abc', handleCallback)
eventBus.emit('abc', 123)