import s from './FrendsItem.module.css'

const FrendsItem = ({ src, name }) => {
	return (
		<div className={s.frendsItem}>
			<img src={src} alt='d' title='c' />
			<div>{name}</div>
		</div>
	)
}

export default FrendsItem