import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import Dialogs from './components/Dialogs/Dialogs';


const App = () => {
	return (
		<Router>

			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/Profile' element={<Profile />} />
						<Route path='/Dialogs' element={<Dialogs />} />
						{/* <Profile /> */}
					</Routes>
				</div>

				<Footer />

			</div>

		</Router>

	);
}

export default App;