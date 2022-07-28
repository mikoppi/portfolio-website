import React from 'react'
import About from './components/About'
import Hero from './components/Hero'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='app'>
      <Hero/>
      <About/>
      <Projects/>
      
    </div>
  )
}

export default App