
const ADD_MESSAGE = 'ADD_MESSAGE'
const VAL_TEXTAREA_MESSAGE = 'VAL_TEXTAREA_MESSAGE'

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
				id: ++state.messagesData.length,
				message: state.newMessageText
			}

			state.messagesData.push(message)
			state.newMessageText = ''

			return state
		}
		case VAL_TEXTAREA_MESSAGE: {
			state.newMessageText = action.newText;
			return state

		}
		default: {
			return state
		}
	}
}


export const addNewMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const onTextChangeActionCreator = (text) => ({ type: VAL_TEXTAREA_MESSAGE, newText: text })


export default messageReducer