import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import Sidebar from './components/SideBar/SideBar';
import Users from './components/Users/Users';



const App = () => {

	return (
		<div className='app-wrapper'>
			<Header />
			<Sidebar 
			// frendsBar={props.appState.frendsBar}
			 />
			<div className='app-wrapper-content'>
				<Routes>
					<Route path='/' element={
						<Profile />} />
					<Route path='/dialogs/*' element={
						<DialogsContainer />
						} />
					<Route path='/users' element={
						<Users />
						} />
					<Route path='/news' element={<News />} />
					<Route path='/music' element={<Music />} />
					<Route path='/settings' element={<Settings />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;