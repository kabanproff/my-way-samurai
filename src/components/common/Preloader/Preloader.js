import React from 'react'
import s from './preloader.module.css'
import preloader from '../../../icons/circles.svg'

const Preloader = () => {
	return (
		<div className={s.wraploader}>
			<img src={preloader} alt='preloader' />
		</div>
	)
}

export default Preloader