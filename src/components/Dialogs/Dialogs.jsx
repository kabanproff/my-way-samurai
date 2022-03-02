import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import s from './Dialogs.module.css';
import Message from "./Messages/Message";
import DialogItem from "./DilogsItem/DialogItem";

const Dialogs = ({ dialogs }) => {

	let { dialogsData, messagesData } = dialogs;

	let dialogsElements = dialogsData.map(({ id, name }) => {
		return <DialogItem key={id} name={name} id={id} />
	});
	let messagesElements = messagesData.map(({ id, message }) => {
		return <Message key={id} message={message} />
	})

	let newMessage = React.createRef();

	let addMessage = () => {
		let message = newMessage.current.value
		console.log(message)
	}


	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<Routes>
				<Route path={'1'} element={
					<div className={s.messages}>
						{messagesElements},
						<div>
							<textarea ref={newMessage}></textarea>
							<button onClick={addMessage}>addMessage</button>
						</div>
					</div>

				} />
			</Routes>
		</div>
	)
}

export default Dialogs