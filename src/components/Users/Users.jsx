import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './users.module.css'
const defaultIcons = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDpxJV62_axM0N-z8vfxnZeGBUIqclFn187w&usqp=CAU'

const Users = (props) => {
	let pages = []
	for (let i = 1; i <= 10; i++) pages.push(i)
	return (
		<div className={s.wrapperUsers} >
			<div className={s.users}>
				<div className={s.wrapNavPages}>
					<ul className={s.navPages}>
						{
							pages.map(i => {
								return <li key={i}
									className={
										props.currentPage === i
											? s.selectedPage : undefined
									}
									onClick={() => { props.onPageChanged(i) }}
								>{i}</li>
							})
						}
					</ul>
				</div>
				{
					props.users.map(i => (
						<div className={s.user} key={i.id}>

							<div>
								<div>
									<NavLink to={'/profile/' + i.id}>
										<img alt='d'
											className={s.photo}
											src={i.photos.small !== null
												? i.photos.small : defaultIcons} />
									</NavLink>
								</div>
								<div>
									{
										i.followed
											? <button onClick={() => { props.unfollow(i.id) }}>Follow</button>
											: <button onClick={() => { props.follow(i.id) }}>Unfollow</button>
									}
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
						</div>))
				}
			</div>
		</div>
	)
}

export default Users