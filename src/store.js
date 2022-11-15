// import createStore from redux
import { createStore } from 'redux'
import rootReducers from './reducers/index'

const store = createStore(rootReducers)
console.log('store', store)
export default store
