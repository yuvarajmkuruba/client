import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import  Register from './components/Register'
const App = () => {
  return (  
    <>
      <Navbar />
      
      {/* <Route path='/' >
      <Home />
      </Route> */}
      {/* <Route path='/'>
         <Home />
      </Route>

      <Route path='/About'>
         <About />
      </Route>
      <Route path='/Contact'>
         <Contact />
      </Route>

      <Route path='/Register'>
         <Register />
      </Route> */}
    </>
  )
}

export default App
