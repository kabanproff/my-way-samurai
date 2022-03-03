import s from './SideBar.module.css';
import Navbar from "./Navbar/Navbar";
// import FrendsBar from './FrendsBar/FrendsBar';

const SideBar = (props) => {
	// console.log(props)
	return (
		<div className={s.sideBar}>
			<Navbar />
			{/* <FrendsBar frendsBar={props.frendsBar} /> */}
		</div>

	)
}

export default SideBar