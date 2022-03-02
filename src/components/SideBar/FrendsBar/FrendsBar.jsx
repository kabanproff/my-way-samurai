import axios from 'axios'
import { useEffect, useState } from 'react'
import s from './FrendsBar.module.css'
import FrendsItem from './FrendsItem/FrendsItem'

const FrendsBar = ({ frendsBar }) => {
	console.log(frendsBar)

	const [frends, setFrends] = useState(null)

	const getUser = async (url) => {
		return await axios.get(url);
	}

	useEffect(() => {

		let users = Promise.all(frendsBar.map(i => getUser(i.url)));
		console.log(users)
		users.then(r => {
			console.log(r)
			return setFrends(r)
		})
			.catch(e => console.log(e))

		console.log(frends)

	}, [])

	return (
		<div className={s.frendsBar}>
			<h3>Frends</h3>
			<div className={s.blockFrends}>
				{frends && frends.map(i => <FrendsItem key={i.data.id} src={i.data.avatar_url} name={i.data.login} />)}
			</div>

		</div>
	)
}

export default FrendsBar