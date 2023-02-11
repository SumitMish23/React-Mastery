import currentUser from './currentUser'
import counter from './counter'
import input from './input'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    currentUser,
    counter,
    input
})

export default rootReducer;