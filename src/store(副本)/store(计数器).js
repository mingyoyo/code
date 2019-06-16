import { createStore } from 'redux'

var store = createStore(function(state = 0, action){
    switch(action.type){
        case 'ADD_NUM': return state + action.val
        default: return state
    }
})


/* Action Creator：action创造者 (辅助函数) */
function addnum(val){
    return {
        type: 'ADD_NUM',
        val
    }
}

/* +1 */
store.dispatch( addnum(1) )
store.dispatch( addnum(5) )
store.dispatch( addnum(10) )
store.dispatch( addnum(100) )


console.log(store.getState())

export default store