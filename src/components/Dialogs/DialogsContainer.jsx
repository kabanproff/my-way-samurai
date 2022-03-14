import Dialogs from "./Dialogs";
import { addNewMessageActionCreator, onTextChangeActionCreator } from "../../redux/message-reducer";
import { connect } from "react-redux";



const mapStateToProps = (state)=>{
	return {
		dialogsPage: state.dialogsPage
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (body) => {
			dispatch(onTextChangeActionCreator(body))
		},
		sendMessage: () => {
			dispatch(addNewMessageActionCreator())
		}
	}
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer