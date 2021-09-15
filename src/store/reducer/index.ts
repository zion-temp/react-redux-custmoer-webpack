import { combineReducers } from 'redux'
// import reducer from './countReducer'
import countReducer from './countReducer'

export const reducer = combineReducers({
    countReducer: countReducer
})