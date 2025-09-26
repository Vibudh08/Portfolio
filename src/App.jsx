import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Home from './screen/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useEffect } from 'react'
import Experience from './components/Experience'

function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/project' element={<Projects/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/experience' element={<Experience/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
