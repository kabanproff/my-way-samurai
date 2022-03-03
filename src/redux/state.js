let rerenderEntireTree = () => {
	console.log('State has change')
}



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
		if (action.type === 'ADD-POST') {
			let newPost = {
				id: ++this._state.postsPage.postsData.length,
				message: this._state.postsPage.newPostText,
				countLikes: 0
			}

			this._state.postsPage.postsData.push(newPost)
			this._state.postsPage.newPostText = ''

		} else if (action.type === 'VAL-TEXTAREA-POST') {
			this._state.postsPage.newPostText = action.newText
			this._callSubscriber(this._state)

		} else if (action.type === 'ADD-MESSAGE') {

			let message = {
				id: ++this._state.dialogsPage.messagesData.length,
				message: this._state.dialogsPage.newMessageText
			}

			this._state.dialogsPage.messagesData.push(message)
			this._state.dialogsPage.newMessageText = ''
			this._callSubscriber(this._state)

		} else if (action.type === 'VAL-TEXTAREA-MESSAGE') {

			this._state.dialogsPage.newMessageText = action.newText;
			this._callSubscriber(this._state)

		}
	}
}


window.state = store._state

export default store