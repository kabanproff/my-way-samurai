import UsersC from './UsersC'
import { connect } from 'react-redux'
import { followAC, setCurrentPageAC, setImagesAC, setTotalUsersCountAC, setUsersAC, unFollowAC } from '../../redux/users-reduser'

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unFollowAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setImages: (images) => {
			dispatch(setImagesAC(images))
		},
		setCurrentPage: (currentPage) => {
			dispatch(setCurrentPageAC(currentPage))
		},
		setTotalUsersCount: (totalUsersCount) => {
			dispatch(setTotalUsersCountAC(totalUsersCount))
		}

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersC)