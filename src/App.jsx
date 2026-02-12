import './App.css'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import HowItWorks from './components/HowItWorks'
import ModelView from './components/ModelView'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <div className='w-screen h-screen text-white'>
      <Navbar/>
      <Hero />
      <Highlights />
      <ModelView />
      <Feature/>
      <HowItWorks/>
      <Footer />
    </div> 
    </>
  )
}

export default App
