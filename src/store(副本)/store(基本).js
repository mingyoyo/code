import { createStore } from 'redux' //引入创建store函数

//创建1个store实例
var store = createStore(function(state, action){
    //state： 当前store身体内的状态
    //action： 本次通知action对象本身

    //reducer返回的值，会直接保存到store内部
    switch(action.type){
        case 'CHANGE_NAME': return '李四'
        case 'AAA': return 'xxx'

        default: return '张三'
    }
})



//action： 通知对象
var a1 = {
    type: 'CHANGE_NAME'    //每个action对象必须有一个type属性（类似id） type决定了怎样操作数据
}

var a2 = {
    type: 'AAA'    //每个action对象必须有一个type属性（类似id） type决定了怎样操作数据
}
// //创建通知对象以后，需要发出通知
store.dispatch(a1)    //发出通知的唯一方式

//模拟
setTimeout(() => {
    store.dispatch(a2)

    console.log(store.getState())
},3000)


//获取数据仓库的值
console.log(store.getState())

export default store