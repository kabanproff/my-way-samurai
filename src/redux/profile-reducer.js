
const ADD_POST = 'ADD_POST'
const VAL_TEXTAREA_POST = 'VAL_TEXTAREA_POST'

let initialState = {
	postsData: [
		{ id: 1, message: 'Всем Прювет:)', countLikes: 10 },
		{ id: 2, message: 'Привет, как дела?', countLikes: 24 },
	],
	newPostText: 'new post message',
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: ++state.postsData.length,
				message: state.newPostText,
				countLikes: 0
			}

			state.postsData.push(newPost)
			state.newPostText = ''
			return state
		}
		case VAL_TEXTAREA_POST: {
			state.newPostText = action.newText
			return state
		}
		default: {
			return state
		}
	}
}

export const onPostChangeActionCreater = (text) => ({ type: VAL_TEXTAREA_POST, newText: text })
export const addPostActionCreater = () => ({ type: ADD_POST })

export default profileReducer