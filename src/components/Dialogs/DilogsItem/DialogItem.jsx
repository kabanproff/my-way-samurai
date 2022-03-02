import { NavLink } from "react-router-dom";
import s from '../Dialogs.module.css';

const DialogItem = ({ name, id }) => {
	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={id.toString()}>{name}</NavLink>
		</div>
	)
}

export default DialogItem