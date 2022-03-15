
const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

// const deepClone = function reclone(obj) {
	
	
// 	function thisArray(obj){
// 		return obj.reduce((pr,i)=>{
// 			return typeof i === 'object' 
// 			? (pr.push(reclone(i)),pr)
// 			:(pr.push(i),pr)
			
// 		},[])
// 	}
// 	function thisObject(obj){
// 		let clone = {}
// 		for (let [k,v] of Object.entries(obj)) {

// 			(Array.isArray(v)) 
// 			? clone[k] = reclone(v)
// 			   : (typeof v === 'object')
// 				? clone[k] = reclone(v)
// 				: clone[k] = obj[k]
// 		}
	
// 	return clone
// 	}

// 	if (obj === null) return null

// 	if (Array.isArray(obj))	return thisArray(obj)
	
// 	if (typeof obj === 'object') return thisObject(obj)


// }

let initialState = {
	dialogsData: [
		{ id: 1, name: 'Dima' },
		{ id: 2, name: 'Lesha' },
		{ id: 3, name: 'Misha' },
		{ id: 4, name: 'Kiril' },
		{ id: 5, name: 'Lena' },
		{ id: 6, name: 'Misha' },
		{ id: 7, name: 'Sasha' },
	],
	messagesData: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'Hello' },
		{ id: 3, message: 'How are you doing?' },
		{ id: 4, message: 'Wery Well' },
	],
	newMessageText: 'Hi',
}

const messageReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_MESSAGE: {
			let message = {
				id: state.messagesData.length +1,
				message: state.newMessageText
			}
			return {
				...state,
				messagesData: [...state.messagesData, message],
				newMessageText: ''
			}
		}
		case UPDATE_NEW_MESSAGE_TEXT: {
			return {
				...state,
				newMessageText: action.newText
			}
		}
		default: return state
	}
}


export const addNewMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const onTextChangeActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })


export default messageReducer