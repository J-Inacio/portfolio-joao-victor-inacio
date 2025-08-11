import Background from './components/Background'
import Navbar from './components/Navbar'
import './index.css'
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
     <Hero/>
     <Hero/>
    </main>
   
    </>
  )
}

export default App
