import { createStore, combineReducers } from 'redux'
import messageReducer from './message-reducer'
import profileReducer from './profile-reducer'

let redusers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: messageReducer,
})
let store = createStore(redusers)

export default store