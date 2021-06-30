import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Login from '../Login'
import Register from '../Register'
import Home from '../Home'
import React from 'react';



const Navbar = ({ isOpen, setIsOpen }) => {
	const closeMenu = () => {
		setIsOpen(false)
	}

	return (
      
<Router>
		<nav className={isOpen}>
	
			<ul className="ul">
                <li><Link to='/Home'>Home</Link></li>
            </ul>
            <ul>
                <li><Link to='/Inscription'>Inscription</Link></li>
            </ul>
            <ul>
                <li><Link to='/Connexion'>Connexion</Link></li>
            </ul>

            <switch>
                <Route path='/Home' component={() => <Home/>}/>
			    <Route path='/Connexion' component={() => <Login/>}/>
				<Route path='/Inscription' component={() => <Register/>}/>
            </switch>


			<button text="FERMER MENu" className='hide' onClick={closeMenu}/>
		</nav>
		</Router>
	)
}

export default NavbarMenu