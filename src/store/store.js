import { createStore } from 'redux'
import reducers from './reducers'

//创建并暴露
export default createStore(reducers)