import React from "react";
import { Route, Routes } from "react-router-dom";
import s from './Dialogs.module.css';
import Message from "./Messages/Message";
import DialogItem from "./DilogsItem/DialogItem";
import { addNewMessageActionCreator, onTextChangeActionCreator } from "../../redux/message-reducer";


const Dialogs = (props) => {


	// console.log(forDialogs)
	// console.log(dialogs)

	let { dialogsData, messagesData, newMessageText } = props.dialogs;
	// let { addMessage, valTextareaMessage } = props.forDialogs;
	let newMessage = React.createRef();


	let dialogsElements = dialogsData.map(({ id, name }) => {
		return <DialogItem key={id} name={name} id={id} />
	});
	let messagesElements = messagesData.map(({ id, message }) => {
		return <Message key={id} message={message} />
	})




	let addNewMessage = () => {
		let message = newMessage.current.value
		props.dispatch(addNewMessageActionCreator())
		// addMessage()
		console.log(message)
	}

	let onTextChange = () => {
		let text = newMessage.current.value

		props.dispatch(onTextChangeActionCreator(text))
		// valTextareaMessage(text)
		console.log(text)
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
							<textarea onChange={onTextChange} ref={newMessage} value={newMessageText}></textarea>
							<button onClick={addNewMessage}>addMessage</button>
						</div>
					</div>

				} />
			</Routes>
		</div>
	)
}

export default Dialogs