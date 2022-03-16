import { createStore, combineReducers } from 'redux'
import messageReducer from './message-reducer'
import profileReducer from './profile-reducer'
import usersReducer from './users-reduser'


let redusers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: messageReducer,
	usersPage: usersReducer
})
let store = createStore(redusers)

export default store