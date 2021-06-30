import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import React from 'react';



const NavbarMenu = ({ isOpen, setIsOpen }) => {
	const closeMenu = () => {
		setIsOpen(false)
	}

	return (

			<nav className="App-menu">
		
				<ul className="ul">
					<li><Link to='/Home'>Home</Link></li>
				</ul>
				<ul>
					<li><Link to='/Inscription'>Inscription</Link></li>
				</ul>
				<ul>
					<li><Link to='/Connexion'>Connexion</Link></li>
				</ul>

				


				{/* <button text="FERMER MENU" className='hide' onClick={closeMenu}/> */}
			</nav>
	
	)
}

export default NavbarMenu