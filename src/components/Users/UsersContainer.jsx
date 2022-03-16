import React from 'react'
import { connect } from 'react-redux'
import { followAC, setCurrentPageAC, setImagesAC, setTotalUsersCountAC, setUsersAC, unFollowAC } from '../../redux/users-reduser'
import axios from 'axios'
import Users from './Users'

class UsersContainer extends React.Component {
	constructor(props) {
		super(props)
		alert('render')

	}

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {

				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)

		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {

				this.props.setUsers(response.data.items)
			})

	}

	render() {
		console.log(this.props)
		return <Users pageSize={this.props.pageSize}
			onPageChanged={this.onPageChanged}
			currentPage={this.props.currentPage}
			users={this.props.users}
			unfollow={this.props.unfollow}
			follow={this.props.follow}
		/>
	}
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)