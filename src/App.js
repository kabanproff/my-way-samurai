import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Dialogs from './components/Dialogs/Dialogs';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import Sidebar from './components/SideBar/SideBar';



const App = (props) => {

	return (
		<div className='app-wrapper'>
			<Header />
			<Sidebar frendsBar={props.appState.frendsBar} />
			<div className='app-wrapper-content'>
				<Routes>
					<Route path='/' element={
						<Profile posts={props.appState.postsPage}
							//  forPost={props.forPost} 
							dispatch={props.dispatch}
						/>} />
					<Route path='/Dialogs/*' element={
						<Dialogs dialogs={props.appState.dialogsPage}
							//  forDialogs={props.forDialogs}
							dispatch={props.dispatch}
						/>} />
					<Route path='/News' element={<News />} />
					<Route path='/Music' element={<Music />} />
					<Route path='/Settings' element={<Settings />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;