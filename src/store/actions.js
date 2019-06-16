//改变name属性
export function changeName(newName){
    return {
        type: 'CHANGE_NAME',
        newName
    }
}



//添加一条历史记录
//house: 本次点击的房产数据
export function addHistoryHouse(house){
    return {
        type: 'ADD_HISTORY_HOUSE',
        house
    }
}