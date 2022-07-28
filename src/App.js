import {React, useState, useRef,useEffect} from 'react'
import About from './components/About'
import Hero from './components/Hero'
import NavBar from './components/Navbar'
import Projects from './components/Projects'
import './styles/Styles'


const App = () => {

  const [coordinates, setCoordinates] = useState(null)

  const buttonRef = useRef()


  //hanki elementin keskikohdan x ja y koordinaatit
  //hanki hiiren koordinatit
  //laske etäisyys hiiren koordinaatti - elementin keskikoordinaatti
  //jaa etäisyydet keskikoordinaateilla --> käytä näitä tuloksia css tyylissä

  const getMouseCoord = (e) => {
    const xCoord = Math.round(
      (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
    );
    const yCoord = Math.round(
      (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
    );
    const coords = { xCoord, yCoord };
    console.log(coords)
    setCoordinates(coords)
    
  }
  
  const onClickHandler = () =>
    {
        const position = buttonRef.current.getBoundingClientRect();
        //This returns an object with left, top, right, bottom, x, y, width, and height.
        console.log(position)
    }
  
  
  //console.log(coordinates)
  return (
    <div className='app'>
      <Hero getMouseCoord={getMouseCoord} coordinates={coordinates} buttonRef={buttonRef} onClickHandler={onClickHandler}/>
      <NavBar/>
      <About/>
      <Projects/>
      
    </div>
  )
}

export default App