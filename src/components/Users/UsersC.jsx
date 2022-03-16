import axios from 'axios'
import React from 'react'
import s from './users.module.css'
const defaultIcons = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDpxJV62_axM0N-z8vfxnZeGBUIqclFn187w&usqp=CAU'

class UsersC extends React.Component {
	constructor(props) {
		super(props)
		alert('render')
		axios.get('https://social-network.samuraijs.com/api/1.0/users?')
			.then(response => {

				this.props.setUsers(response.data.items)
			})
	}
	getUsers = () => {
		if (this.props.users.length === 0) {

			// axios.get('https://api.github.com/users')
			axios.get('https://social-network.samuraijs.com/api/1.0/users?')
				.then(response => {

					this.props.setUsers(response.data.items)
				})

		}
	}
	render() {
		return (
			<div className={s.wrapperUsers} >
				<div className={s.users}>
					<button className={s.butGet} onClick={this.getUsers}>getUsers</button>
					{
						this.props.users.map(i => (
							<div className={s.user} key={i.id}>

								<div>
									<div>
										<img alt='d' className={s.photo} src={i.photos.small !== null ? i.photos.small : defaultIcons} />
									</div>
									<div>
										{
											i.followed
												? <button onClick={() => { this.props.unfollow(i.id) }}>Follow</button>
												: <button onClick={() => { this.props.follow(i.id) }}>Unfollow</button>
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
				<div>
					{
						this.props.images.map((i, d) => <img key={d} src={i.thumbnail} alt="" />)
					}
				</div>
			</div>
		)
	}
}

export default UsersC