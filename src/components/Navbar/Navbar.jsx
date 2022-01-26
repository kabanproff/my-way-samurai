import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';


// className={({ isActive }) => { console.log(isActive); return (isActive ? 'active' : '') }}
function setActive(act) {
	return act.isActive ? s.active : '';
}
console.log(NavLink)
const Navbar = () => {
	return <nav className={s.nav}>
		<div className={s.item}><NavLink to="/profile/" className={act => setActive(act)}>Proffile</NavLink></div>
		<div className={s.item}><NavLink to="/dialogs/" className={act => setActive(act)} >Messages</NavLink></div>
		<div className={s.item}><NavLink to="/news" className={act => setActive(act)}>News</NavLink></div>
		<div className={s.item}><NavLink to="music" className={act => setActive(act)}>Music</NavLink></div>
		<div className={s.item}><NavLink to="settings" className={act => setActive(act)}>Settings</NavLink></div>
	</nav >
}

export default Navbar