import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
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
					<Route path='/profile' element={Profile} />
					<Route path='/dialogs' element={Dialogs} />
					{/* <Profile /> */}
				</div>

				<Footer />

			</div>
		// </Router>

	);
}

export default App;