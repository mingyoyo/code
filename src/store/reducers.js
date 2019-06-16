import { combineReducers } from 'redux'


//测试值： 姓名
function name(state = '班长', action) {
    switch (action.type) {
        case 'CHANGE_NAME': return action.newName

        default: return state
    }
}

function age(state = 32, action) {
    switch (action.type) {
        default: return state
    }
}

//历史列表
function historylist(state = [], action) {
    switch (action.type) {


        case 'ADD_HISTORY_HOUSE': {
            /*  
                1. 删除老数组内的重复数据
                2. 把新数据插入到数组头部
            */
           //1. 删除老数组内的重复数据
            for (let i = 0; i < state.length; i++) {
                if(state[i].id == action.house.id){
                    //此数据重复，删除
                    state.splice(i,1)

                    //每次循环时，一旦做了想做的事情，请立即停止循环，结束无意义的性能消耗
                    break
                }
            }


            //2. 把新数据插入到数组头部
            return [action.house, ...state]
        }

        default: return state
    }
}



export default combineReducers({
    name,
    age,
    historylist
})