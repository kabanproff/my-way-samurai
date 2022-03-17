import React from 'react'
import { connect } from 'react-redux'
import { followAC, setCurrentPageAC, setImagesAC, setIsFetchingAC, setTotalUsersCountAC, setUsersAC, unFollowAC } from '../../redux/users-reduser'
import axios from 'axios'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.setIsFetchingAC()
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {

				this.props.setUsersAC(response.data.items)
				this.props.setTotalUsersCountAC(response.data.totalCount)
				this.props.setIsFetchingAC()

			})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPageAC(pageNumber)
		this.props.setIsFetchingAC()
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {

				this.props.setUsersAC(response.data.items)
				this.props.setIsFetchingAC()
			})

	}

	render() {
		console.log(this.props)
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
					totalUsersCount={this.props.totalUsersCount}
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



export default connect(mapStateToProps, {
	followAC,
	unFollowAC,
	setUsersAC,
	setImagesAC,
	setCurrentPageAC,
	setTotalUsersCountAC,
	setIsFetchingAC
})(UsersContainer)