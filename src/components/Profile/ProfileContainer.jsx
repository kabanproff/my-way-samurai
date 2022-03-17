import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { setUserProfile } from '../../redux/profile-reducer';



class ProfileContainer extends React.Component {



	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
			.then(rs => {
				// console.log(rs)
				this.props.setUserProfile(rs.data)

			})

		// fetch(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
		// 	.then(response => {
		// 		console.log(response instanceof Response)
		// 		return response.json()
		// 	})
		// 	.then(rs => {
		// 		console.log(rs)
		// 	})
	}


	render() {
		console.log(this.props)
		return (

			<Profile {...this.props}
				profile={this.props.profile}
			/>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile
	}
}

export default connect(mapStateToProps, {

	setUserProfile

})(ProfileContainer) 