const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_IMAGES = 'SET_IMAGES'


let initialState = {
	users: [
		// { id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPD2lxiEQJm9M8tY-JwUiqDkqZ45bYAYk2_Q&usqp=CAU', followed: false, fullName: 'Dmitry K', status: 'Люблю этот Мир', location: { city: 'Minsk', country: 'Belarus' } },
		// { id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp7mymjcNh2nyn-20r6qNkrMxhQUK0ogon3g&usqp=CAU', followed: true, fullName: 'Andry Sh', status: 'Хочу кушать', location: { city: 'Minsk', country: 'Belarus' } },
		// { id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_lt9056_KbjqZQSTHvioprDk6y2eTXiTUg&usqp=CAU', followed: false, fullName: 'Ирина', status: 'Замужем', location: { city: 'Гродно', country: 'Belarus' } },
		// { id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDpxJV62_axM0N-z8vfxnZeGBUIqclFn187w&usqp=CAU', followed: true, fullName: 'Kiril', status: 'I\'am the BOSS', location: { city: 'Moscow', country: 'Rassia' } },
	],
	images:[]
}

const usersReducer = (state = initialState, action) => {


	switch (action.type) {

		case FOLLOW: {
			return {
				...state,
				users: state.users.map((i) => {
					return i.id === action.userId
						? { ...i, followed: true }
						: i
				})
			}
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map(i => {
					return i.id === action.userId
						? { ...i, followed: false }
						: i
				})
			}
		}
		case SET_USERS: {
			return {
				...state,
				users: [...state.users, ...action.users]
			}
		}
		case SET_IMAGES: {
			return {
				...state,
				images: [...state.images, ...action.images]
			}
		}

		default: return state

	}
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ( { type: SET_USERS, users } )
export const setImagesAC = (images) => ( { type: SET_IMAGES, images } )

export default usersReducer