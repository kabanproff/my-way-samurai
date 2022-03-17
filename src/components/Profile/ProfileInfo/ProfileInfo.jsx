import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
	console.log(props.profile)


	if (!props.profile) {
		return <Preloader />
	}
	let { photos, userId, lookingForAJobDescription, lookingForAJob, fullName, aboutMe } = props.profile

	return (
		<div>
			<div className={s.imagePage}>
				<img alt='dd'
					title='dfg'
					src='https://images.pexels.com/photos/5232649/pexels-photo-5232649.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.54&h=500&sharp=20&w=1400' />
			</div>
			<div className={s.descriptionBlock}>
				<div className={s.avatar}>
					<img src={photos.large} alt={'avatar'} />
				</div>
				<div className={s.description}>
					<h3>{fullName}</h3>
					<div>{aboutMe}</div>
					{lookingForAJob && <div>Работаю ли я : я работаю!</div>}
					{lookingForAJobDescription && <div>Ищу ли я работу: {lookingForAJobDescription}</div>}
					<p>Мой ID: {userId}</p>

				</div>
			</div>
		</div>
	)
}

export default ProfileInfo