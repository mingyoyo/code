/* 
    reducer的拆分，方便管理
    每一个小的reducer只负责一种状态的计算
    多状态就采用此种方式定义
*/
import { combineReducers } from 'redux'

function name(state = '张三', action){
    switch(action.type){
        default: return state
    }
}

function age(state = 18, action){
    switch(action.type){
        case 'CHANGE_AGE': return state + 1

        default: return state
    }
}

function sex(state = '男', action){
    switch(action.type){
        default: return state
    }
}


export default combineReducers({
    //key(状态名): value(此状态对应的reducer)
    name,
    age,
    sex
})