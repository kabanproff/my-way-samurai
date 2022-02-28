import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
	return (
		<div>
			<div>
				<img alt='dd' title='dfg' src='https://images.pexels.com/photos/5232649/pexels-photo-5232649.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.54&h=500&sharp=20&w=1400'></img>
			</div>
			<div className={s.descriptionBlock}>
				ava+description
			</div>
		</div>
	)
}

export default ProfileInfo