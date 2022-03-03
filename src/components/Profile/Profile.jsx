import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	console.log(props)
	return (
		<div className={s.content}>
			<ProfileInfo />
			<MyPosts posts={props.posts} dispatch={props.dispatch} />
		</div >
	)
}

export default Profile 