import {React, useState} from 'react'
import About from './components/About'
import Hero from './components/Hero'
import NavBar from './components/Navbar'
import Projects from './components/Projects'
import './styles/Styles'

const App = () => {

  //const [coordinates, setCoordinates] = useState(null)

  const getMouseCoord = (e) => {
    const xCoord = Math.round(
      (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
    );
    const yCoord = Math.round(
      (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
    );
    const coords = { xCoord, yCoord };
    //console.log(coords)
    return coords
  }   

  return (
    <div className='app'>
      <Hero getMouseCoord={getMouseCoord}/>
      <NavBar/>
      <About/>
      <Projects/>
      
    </div>
  )
}

export default App