import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../Icons/Icons";
import s from './Navbar.module.css';

function setActive(act) {
	return act.isActive ? s.active : '';
}
console.log(NavLink)
const Navbar = () => {
	return <nav className={s.nav}>
		<div className={s.item}><NavLink to="/" className={act => setActive(act)}><Icon name='icon-contacts' />Proffile</NavLink></div>
		<div className={s.item}><NavLink to="/dialogs" className={act => setActive(act)} ><Icon name='icon-speech-bubble-2' />Messages</NavLink></div>
		<div className={s.item}><NavLink to="/news" className={act => setActive(act)}><Icon name='icon-news' />News</NavLink></div>
		<div className={s.item}><NavLink to="/music" className={act => setActive(act)}><Icon name='icon-music' />Music</NavLink></div>
		<div className={s.item}><NavLink to="/settings" className={act => setActive(act)}><Icon name='icon-settings' />Settings</NavLink></div>
	</nav >
}

export default Navbar