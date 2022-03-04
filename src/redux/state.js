import messageReduser from "./message-reduser"
import profileReduser from "./profile-reduser"


let store = {
	_state: {
		postsPage: {
			postsData: [
				{ id: 1, message: 'Всем Прювет:)', countLikes: 10 },
				{ id: 2, message: 'Привет, как дела?', countLikes: 24 },
			],
			newPostText: 'new post message',
		},
		dialogsPage: {
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
		},
		frendsBar: [

			{ url: 'https://api.github.com/users/ilonaverenich' },
			{ url: 'https://api.github.com/users/lukas' },
			{ url: 'https://api.github.com/users/nitay' },
		]
	},
	_callSubscriber() {
		console.log('state')
	},
	getState() {
		return this._state
	},
	subscribe(observer) {
		// debugger
		this._callSubscriber = observer
	},
	dispatch(action) {
		this._state.postsPage = profileReduser(this._state.postsPage, action)
		this._state.dialogsPage = messageReduser(this._state.dialogsPage, action)

		this._callSubscriber(this._state)
	}
}

window.state = store._state

export default store