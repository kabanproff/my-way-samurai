import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (p) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<div className={s.dialog + ' ' + s.active}>
					Dima
				</div>
				<div className={s.dialog}>
					Lesha
				</div>
				<div className={s.dialog}>
					Misha
				</div>
				<div className={s.dialog}>
					Lena
				</div>
				<div className={s.dialog}>
					Kiril
				</div>

			</div>
			<div className={s.messages}>
				<div className={s.message}>Hi</div>
				<div className={s.message}>Hello</div>
				<div className={s.message}>How are you doing?</div>
				<div className={s.message}>Very Well</div>
			</div>
		</div>
	)
}

export default Dialogs