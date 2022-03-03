import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
	// console.log(props)

	let newPostElement = React.createRef();

	let addPost = () => {
		// let text = newPostElement.current.value;
		// props.forPost.addPost()
		props.dispatch({ type: 'ADD-POST' })
	}

	const onPostChange = () => {
		let text = newPostElement.current.value
		props.dispatch({ type: 'VAL-TEXTAREA-POST', newText: text })
		// props.forPost.valTextareaPost(text)
		console.log(text)

	}

	return (
		<div className={s.postsBlock}>
			<h3>my posts</h3>
			<div>
				<div>new post</div>
				<textarea onChange={onPostChange} ref={newPostElement} value={props.posts.newPostText}></textarea>
				<button onClick={addPost}>Add post</button>

			</div>
			<div className={s.posts}>
				{props.posts.postsData.map(({ id, message, countLikes }) => {
					return <Post key={id} message={message} countLikes={countLikes} />
				})}
			</div>
		</div>
	)
}

export default MyPosts 