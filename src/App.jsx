
import { createBrowserRouter, Route,Routes} from 'react-router-dom'
import './App.css'
import Hero from './Components/Hero'
import NavSection from './Components/NavSection'
import ContactPage from './ContactPage/ContactPage'
import About from './About Me/About'
import Skills from './Skills/Skills'
import Project from './Projects/Project'

function App() {
  

  return (
    <>
<NavSection/>
<Routes>
<Route path='/' element={<Hero/>}/>
<Route path='/ContactPage' element={<ContactPage/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Project' element={<Project/>}/>
<Route path='/Skills' element={<Skills/>}/>

</Routes>
    
    </>
  )
}

export default App
