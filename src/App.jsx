import Background from './components/Background'
import Navbar from './components/Navbar'
import './index.css'
import About from './Sections/About'
import Hero from './Sections/Hero'
import ProjectsList from './Sections/ProjectsList'

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
     <ProjectsList/>
    </main>
   
    </>
  )
}

export default App
