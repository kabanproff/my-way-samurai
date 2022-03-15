
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

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
				id: state.postsData.length + 1,
				message: state.newPostText,
				countLikes: 0
			}
			return {
				...state,
				postsData: [...state.postsData, newPost],
				newPostText: ''
			}
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText
			}
		}
		default: return state

	}
}

export const onPostChangeActionCreater = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const addPostActionCreater = () => ({ type: ADD_POST })

export default profileReducer


