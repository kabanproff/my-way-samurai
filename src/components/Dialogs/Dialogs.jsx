import React from "react";
import { Route } from "react-router-dom";
import s from './Dialogs.module.css';
import Message from "./Messages/Message";
import DialogItem from "./DilogsItem/DialogItem";
import { Switch } from "react-router-dom";


const Dialogs = (props) => {
	console.log(props)


	let { dialogsData, messagesData, newMessageText } = props.dialogsPage;
	let newMessage = React.createRef();


	let dialogsElements = dialogsData.map(({ id, name }) => {
		return <DialogItem key={id} name={name} id={id} />
	});
	let messagesElements = messagesData.map(({ id, message }) => {
		return <Message key={id} message={message} />
	})




	let onSendMessageClick = () => {
		props.sendMessage()
	}

	let onNewMessageChange = (e) => {
		// debugger
		let body = e.target.value
		props.updateNewMessageBody(body)
		console.log(body)
	}


	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<Switch>
				<Route path={'1'} element={
					<div className={s.messages}>
						{messagesElements}
						<div>
							<textarea style={{ fontSize: '20px' }} onChange={onNewMessageChange} ref={newMessage} value={newMessageText}></textarea>
							<button onClick={onSendMessageClick}>addMessage</button>
						</div>
					</div>

				} />
			</Switch>
		</div>
	)
}

export default Dialogs