import React from "react";
import s from './Post.module.css'

const Post = ({ message, countLikes }) => {
	// console.log(p)

	return (
		<div className={s.item}>
			<div><img alt='f' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsvSANfsObwK8wTcBGikrcsM7PWcOzmCtJVg&usqp=CAU' />
				<span>{message}</span>
			</div>
			<div>
				👍{countLikes} <span>❤like❤</span>
			</div>
		</div>


	)

}

export default Post 