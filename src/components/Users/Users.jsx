import axios from 'axios'
import React from 'react'
import s from './users.module.css'
// import Icon from '../Icons/Icons'
const defaultIcons = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDpxJV62_axM0N-z8vfxnZeGBUIqclFn187w&usqp=CAU'

const Users = (props) => {

	if (props.users.length === 0) {

		// axios.get('https://api.github.com/users')
		axios.get('https://social-network.samuraijs.com/api/1.0/users?')
			.then(response => {

				props.setUsers(response.data.items)
			})


		// props.setUsers(


		// 	[
		// 		{ id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPD2lxiEQJm9M8tY-JwUiqDkqZ45bYAYk2_Q&usqp=CAU', followed: false, fullName: 'Dmitry K', status: 'Люблю этот Мир', location: { city: 'Minsk', country: 'Belarus' } },
		// 		{ id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp7mymjcNh2nyn-20r6qNkrMxhQUK0ogon3g&usqp=CAU', followed: true, fullName: 'Andry Sh', status: 'Хочу кушать', location: { city: 'Minsk', country: 'Belarus' } },
		// 		{ id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_lt9056_KbjqZQSTHvioprDk6y2eTXiTUg&usqp=CAU', followed: false, fullName: 'Ирина', status: 'Замужем', location: { city: 'Гродно', country: 'Belarus' } },
		// 		{ id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDpxJV62_axM0N-z8vfxnZeGBUIqclFn187w&usqp=CAU', followed: true, fullName: 'Kiril', status: 'I\'am the BOSS', location: { city: 'Moscow', country: 'Rassia' } },
		// 	]

		// )

	}
	console.log(props)
	// if (props.images.length === 0) {
	// 	let response = async () => await fetch('https://repetitora.net/api/JS/Images')
	// 	response().then(rs => rs.json())
	// 		.then(rs => {
	// 			console.log(rs)
	// 			props.setImages(rs)
	// 		})

	// }
	return (
		<div className={s.wrapperUsers}>
			<div className={s.users}>{
				props.users.map(i => <div className={s.user} key={i.id}>

					<div>
						<div>
							{/* <Icon name={'icon-user-male'} /> */}
							<img alt='d' className={s.photo} src={i.photos.small !== null ? i.photos.small : defaultIcons} />
						</div>
						<div>
							{i.followed
								? <button onClick={() => { props.unfollow(i.id) }}>Follow</button>
								: <button onClick={() => { props.follow(i.id) }}>Unfollow</button>}

						</div>
					</div>
					<div className={s.text}>
						<div>
							<div>
								{i.name}
							</div>
							<div>{i.status}</div>
						</div>
						<div>
							<div>
								i.location.city
							</div>
							<div>
								i.location.country
							</div>
						</div>
					</div>

				</div>)
			}</div>
			<div>
				{

					props.images.map((i, d) => <img key={d} src={i.thumbnail} alt="" />)
				}
			</div>
		</div>
	)
}

export default Users