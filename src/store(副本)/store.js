import { createStore } from 'redux'
import reducers from './reducers'

var store = createStore(reducers)
console.log(store.getState())

function changeAge(){
    return {
        type: 'CHANGE_AGE'
    }
}

store.dispatch( changeAge() )
store.dispatch( changeAge() )

console.log(store.getState())


export default store