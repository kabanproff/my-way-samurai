import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import s from './Dialogs.module.css';

const DialogItem = ({ name, id }) => {
	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={id}>{name}</NavLink>
		</div>
	)
}

const Message = ({ message }) => {
	return <div className={s.message}>{message}</div>
}

const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name={'Dima'} id={'1'} />
				<DialogItem name={'Lesha'} id={'2'} />
				<DialogItem name={'Misha'} id={'3'} />
				<DialogItem name={'Lena'} id={'4'} />
				<DialogItem name={'Kiril'} id={'5'} />
				<DialogItem name={'Sasha'} id={'6'} />
			</div>
			<Routes>
				<Route path={'1'} element={
					<div className={s.messages}>
						<Message message={'Hi'} />
						<Message message={'Hello'} />
						<Message message={'How are you doing?'} />
						<Message message={'Very Well'} />
					</div>
				} />
			</Routes>
		</div>
	)
}

export default Dialogs