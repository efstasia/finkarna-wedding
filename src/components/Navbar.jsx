/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import finches from '../images/finkar.png'

export const Navbar = () => {

	return (
		<div className='navbar'>
			<nav>

				<ul className='navbar__list'>
					<li><Link to="/">      <img src={finches} alt="" /></Link></li>
					<li><Link to="/calendar">Kalender</Link></li>
				</ul>
			</nav>
		</div>
	)
}