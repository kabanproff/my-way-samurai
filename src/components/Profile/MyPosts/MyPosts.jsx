import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post"


const MyPosts = (props) => {
	// console.log(props)

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost()
	}

	const onPostChange = (e) => {

		let text = e.target.value
		props.updateNewPostText(text)
		console.log(text)

	}
console.log(props)
	return (
		<div className={s.postsBlock}>
			<h3>my posts</h3>
			<div>
				<div>new post</div>
				<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
				<button onClick={onAddPost}>Add post</button>

			</div>
			<div className={s.posts}>
				{props.posts.map(({ id, message, countLikes }) => {
					return <Post key={id} message={message} countLikes={countLikes} />
				})}
			</div>
		</div>
	)
}

export default MyPosts 