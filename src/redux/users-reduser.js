const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_IMAGES = 'SET_IMAGES'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'IS_FETCHING'




let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
}

const usersReducer = (state = initialState, action) => {
	// debugger

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
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.currentPage
			}

		}

		case SET_USERS: {
			return {
				...state,
				users: [...action.users]
			}
		}
		case SET_IMAGES: {
			return {
				...state,
				images: [...state.images, ...action.images]
			}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {
				...state,
				totalUsersCount: action.totalUsersCount
			}
		}
		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				// isFetching: action.isFetching
				isFetching: !state.isFetching
			}
		}

		default: return state

	}
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setImagesAC = (images) => ({ type: SET_IMAGES, images })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const setIsFetchingAC = () => ({ type: TOGGLE_IS_FETCHING })

export default usersReducer