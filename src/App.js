import './App.css';
import { BrowserRouter as Router, Link, Route , Switch } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import NavbarMenu from './components/Navbar/NavbarMenu'
import { useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'


function App() {

  const [isOpen, setIsOpen] = useState(false)

	const openMenu = () => {
		setIsOpen(v => !v)
	}

 
  return (
    <Router>
      <div className="App">
        <header>
          {isOpen && <NavbarMenu setIsOpen={setIsOpen} />}
          <section className="flex">
            <button text="OUVRIR MENU" onClick={openMenu}>Menu</button>
          </section>

          
        </header>
        <Switch>
            <Route path='/Home' component={() => <Home/>}/>
            <Route path='/Connexion' component={() => <Login/>}/>
            <Route path='/Inscription' component={() => <Register/>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;