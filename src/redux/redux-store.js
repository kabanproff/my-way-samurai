import { createStore, combineReducers } from 'redux'
import messageReducer from './message-reducer'
import profileReducer from './profile-reducer'

let redusers = combineReducers({
	profileReducer: profileReducer,
	messageReducer: messageReducer,
})
let store = createStore(redusers)

export default store