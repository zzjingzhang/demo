// 打开数据库，和数据库建立连接

const dbRequest = indexedDB.open('weichen')  // 第一个参数是数据库名称，第二个参数是版本号
console.log(dbRequest)
dbRequest.onerror = function (err) {
    console.log(err, '打开数据库失败了')
}

let db = null
dbRequest.onsuccess = function (event) {
    console.log(event, '成功打开数据库')
    db = event.target.result
    console.log(db, 'success')
}

// 第一次打开或者版本发生更新
dbRequest.onupgradeneeded = function (event) {
    console.log(event, '版本更新')
    const db = event.target.result
    console.log(db)

    // 创建一些存储对象
    db.createObjectStore('users', { keyPath: "id" })

}


class User {
    constructor(id, age, name) {
        this.id = id;
        this.age = age;
        this.name = name
    }
}

const users = [
    new User(1, 18, 'a'),
    new User(2, 18, 'b'),
    new User(3, 18, 'c'),
    new User(4, 18, 'd'),
    new User(5, 18, 'e'),
]
console.log(users)

const btns = document.querySelectorAll('button')

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        // const transaction = db.transaction(["users"], "readwrite")  // 第一个参数可以传一个数组，可以传多个
        const transaction = db.transaction("users", "readwrite")
        const store = transaction.objectStore("users")
        switch (i) {
            case 0:
                console.log('新增')
                for (const user of users) {
                    const request = store.add(user)
                    // 每添加成功一次执行以下回调
                    request.onsuccess = function () {
                        console.log(`${user.name}插入成功`)
                    }

                }

                // 所有的事务操作成功执行下面这个回调
                transaction.oncomplete = function () {
                    console.log('本次添加操作完成')
                }
                break;
            case 1:
                console.log('查询')
                // // 查询方式一
                // const request = store.get(1)  // 异步查询
                // request.onsuccess = function (event) {
                //     console.log(event.target.result)  // 查询到的最终结果
                // }

                // 查询方式二
                const request = store.openCursor()
                request.onsuccess = function (successEvent) {
                    const cursor = successEvent.target.result
                    if (cursor) {
                        console.log(cursor.key, '----', cursor.value)
                        cursor.continue()
                    } else {
                        console.log('查询完成')
                    }
                }
                break;
            case 2:
                console.log('删除')
                const delRequest = store.openCursor()
                delRequest.onsuccess = function (successEvent) {
                    const cursor = successEvent.target.result
                    if (cursor) {
                        if (cursor.key === 3) {
                            cursor.delete()

                        } else {
                            cursor.continue()

                        }


                    } else {
                        console.log('查询完成')
                    }
                }
                break;
            case 3:
                console.log('修改')
                const updateRequest = store.openCursor()
                updateRequest.onsuccess = function (successEvent) {
                    const cursor = successEvent.target.result
                    if (cursor) {
                        if (cursor.key === 4) {
                            const value = cursor.value
                            value.name = 'edit'
                            cursor.update(value)
                        }

                        cursor.continue()
                    } else {
                        console.log('查询完成')
                    }
                }
                break;
        }

    }

}