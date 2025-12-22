import React from 'react'
import Navbar from './Components/Navbar/Navbar'

import About from './Components/Navbar/About/About'
import Quickration from './Components/Navbar/Projects/quickration'
import Wether from './Components/Navbar/Projects/Wether'
import Todo from './Components/Navbar/Projects/Todo'
import Rentwell from './Components/Navbar/Projects/Rentwell'
import Projects from './Components/Navbar/Projects/Projects'



import Hero from './Components/Navbar/Hero/Hero'
import Contact from './Components/Navbar/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Education from './Components/Education/Education'



function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Quickration/>
      
      <Rentwell/>
      <Wether/>
      <Todo/>
      <Education/>
      <Footer/>
     

    
    
      

  



      


    </div>
  )
}

export default App