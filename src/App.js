import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import Dialogs from './components/Dialogs/Dialogs';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';



const App = () => {
	return (
		<Router>

			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/' element={<Profile />} />
						<Route path='/Dialogs/*' element={<Dialogs />} />
						<Route path='/News' element={<News />} />
						<Route path='/Music' element={<Music />} />
						<Route path='/Settings' element={<Settings />} />

					</Routes>
				</div>

				<Footer />

			</div>

		</Router>

	);
}

export default App;