import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import Sidebar from './components/SideBar/SideBar';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



const App = () => {

	return (
		<div className='app-wrapper'>
			<Header />
			<Sidebar
			// frendsBar={props.appState.frendsBar}
			/>
			<div className='app-wrapper-content'>
				<Switch>
					<Route path='/profile/:userId?' render={() => (
						<ProfileContainer />)} />
					<Route path='/dialogs/*' render={() => (
						<DialogsContainer />
					)} />
					<Route path='/users' render={() => (
						<UsersContainer />
					)} />
					<Route path='/news' render={() => (<News />)} />
					<Route path='/music' render={() => (<Music />)} />
					<Route path='/settings' render={() => (<Settings />)} />
				</Switch>
			</div>
			<Footer />
		</div>
	);
}

export default App;