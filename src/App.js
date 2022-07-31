import {React, useState, useRef,useEffect} from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import NavBar from './components/Navbar'
import Projects from './components/Projects'
import './styles/Styles'


const App = () => {

  const [coordinates, setCoordinates] = useState({xDiff:0,yDiff:0})

  const heroRef = useRef()

  


  //hanki elementin keskikohdan x ja y koordinaatit
  //hanki hiiren koordinatit
  //laske etäisyys hiiren koordinaatti - elementin keskikoordinaatti
  //jaa etäisyydet keskikoordinaateilla --> käytä näitä tuloksia css tyylissä

  const onMoveHandler = (e) =>
    {
        const position = heroRef.current.getBoundingClientRect();
        const xPos = position.left + heroRef.current.offsetWidth/2;
        const yPos = position.top + (heroRef.current.offsetHeight/2)+window.scrollY;
        const xDist = e.pageX-xPos;
        const yDist = e.pageY-yPos;
        const xDiff = (xDist/xPos)*10;
        const yDiff = (yDist/yPos)*10;
        
        //console.log(xDiff, yDiff)
        setCoordinates({xDiff,yDiff})
    }
  
  
  //console.log(coordinates)
  return (
    <div className='app'>
      <Hero  coordinates={coordinates} heroRef={heroRef} onMoveHandler={onMoveHandler}/>
      <NavBar/>
      <About/>
      <Projects/>
      <Contact/>
      
    </div>
  )
}

export default App