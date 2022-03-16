import React from 'react'
import { connect } from 'react-redux'
import { followAC, setCurrentPageAC, setImagesAC, setIsFetchingAC, setTotalUsersCountAC, setUsersAC, unFollowAC } from '../../redux/users-reduser'
import axios from 'axios'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching()
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {

				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
				this.props.toggleIsFetching()

			})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching()
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {

				this.props.setUsers(response.data.items)
				this.props.toggleIsFetching()
			})

	}

	render() {
		// console.log(this.props)
		// debugger
		return (
			<>
				{
					this.props.isFetching
						? <Preloader />
						: null
				}

				<Users pageSize={this.props.pageSize}
					onPageChanged={this.onPageChanged}
					currentPage={this.props.currentPage}
					users={this.props.users}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
				/>
			</>
		)
	}
}

const mapStateToProps = (state) => {
	console.log('state=>', state)
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
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
		},
		toggleIsFetching: () => {
			dispatch(setIsFetchingAC())
		}

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)