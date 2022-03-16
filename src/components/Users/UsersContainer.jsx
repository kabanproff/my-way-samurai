import UsersC from './UsersC'
import { connect } from 'react-redux'
import { followAC, setImagesAC, setUsersAC, unFollowAC } from '../../redux/users-reduser'

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		images: state.usersPage.images
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
		}

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersC)