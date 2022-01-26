import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
	return <div>
		my posts
		<div>
			<div>new post</div>
			<textarea></textarea>
			<button>Add post</button>

		</div>
		<div className={s.posts}>
			<Post message='Всем Прювет:)' liks='10' />
			<Post message='Привет, как дела?' liks='24' />
		</div>
	</div>

}

export default MyPosts 