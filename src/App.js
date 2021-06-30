import './App.css';
import Navbar from './components/Navbar/Navbar'
import { useState} from 'react'

function App() {

  const [isOpen, setIsOpen] = useState(false)

	const openMenu = () => {
		setIsOpen(true)
	}


  return (
    <div className="App">
      <header className="App-header">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
          <section className="flex">
					  <button text="OUVRIR MENU" onClick={openMenu}/>
				  </section>
        <main>
        
        
        
        </main>
      </header>
    </div>
  );
}

export default App;