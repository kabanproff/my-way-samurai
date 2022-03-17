import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ profile }) => {
	console.log(profile)
	return (
		<div className={s.content}>
			<ProfileInfo profile={profile} />
			<MyPostsContainer />
		</div >
	)
}

export default Profile 