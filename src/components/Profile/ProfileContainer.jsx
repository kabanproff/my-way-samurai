import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { setUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

	componentDidMount() {
		// debugger
		// console.log(this.props)

		let userId = this.props.match.params.userId || 2
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then(rs => {
				// console.log(rs)
				this.props.setUserProfile(rs.data)
				debugger
			})
	}


	render() {
		return (
			<Profile profile={this.props.profile} />
		)
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile
	}
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {

	setUserProfile

})(withUrlDataContainerComponent) 