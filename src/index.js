import store from './redux/state';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

let rerender = () => {
	ReactDOM.render(
		<Router>
			<App appState={store.getState()}
				dispatch={store.dispatch.bind(store)}
			// forPost={{ addPost: store.addPost.bind(store), valTextareaPost: store.valTextareaPost.bind(store) }}
			// forDialogs={{ addMessage: store.addMessage.bind(store), valTextareaMessage: store.valTextareaMessage.bind(store) }} 
			/>
		</Router>,


		document.getElementById('root')
	);
}
rerender()
store.subscribe(rerender)






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
