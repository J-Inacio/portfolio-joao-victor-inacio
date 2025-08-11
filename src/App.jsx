import Background from './components/Background'
import Navbar from './components/Navbar'
import './index.css'
import About from './Sections/About'
import Hero from './Sections/Hero'

function App() {

  return (
    <>
    <Background/>
    <header>
      <Navbar/>
    </header>
    <main>
     <Hero/>
     <About/>
    </main>
   
    </>
  )
}

export default App
