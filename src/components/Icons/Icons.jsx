import React from "react";
import svg from '../../icons/favorites-all.svg';
import './css/styles.css';

const Icon = ({ name }) => {
	return (
		<i className={name}>
			<svg>
				<use href={svg + `#${name}`} ></use>
			</svg>
		</i>

	)
}

export default Icon