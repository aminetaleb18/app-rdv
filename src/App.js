import './App.css';
import NavbarMenu from './components/Navbar/NavbarMenu'
import { useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'


function App() {

  const [isOpen, setIsOpen] = useState(false)

	const openMenu = () => {
		setIsOpen(true)
	}


  return (
    <div className="App">
      <header className="App-header">
        <Navbar expand="lg" variant="light" bg="dark"
         isOpen={isOpen} setIsOpen={setIsOpen} />
        <section className="flex">
					<button text="OUVRIR MENU" onClick={openMenu}/>
				</section>


        
        
        
        
        
      </header>
    </div>
  );
}

export default App;