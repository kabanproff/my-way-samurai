import React from "react";
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
	return <div className={s.content}>
		<div>
			<img alt='dd' title='dfg' src='https://images.pexels.com/photos/5232649/pexels-photo-5232649.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.54&h=500&sharp=20&w=1400'></img>
		</div>
		<div>
			ava+description

		</div>
		<MyPosts />


		Main coxntent</div >
}

export default Profile 