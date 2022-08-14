import {React,useRef, useEffect} from 'react'
import { Link } from "react-scroll";



const Hero = ({ coordinates, heroRef, onMoveHandler}) => {
  
  
  //console.log(coordinates)
  const styles = { 
    transform: `perspective(${1000}px) rotateX(${-coordinates.yDiff}deg) rotateY(${coordinates.xDiff}deg) translateZ(${100}px)`,
  };



  return (
    <section className='hero' ref={heroRef} onMouseMove={onMoveHandler}>
        <div className='hero-wrapper'  style={styles}  >
          <h1 className='hero-title'>My name is Miko,</h1>
          <h1 className='hero-title'>I am a web developer.</h1>
          <Link className='navlink' activeClass="active" to="about" 
          spy={true} smooth={true} offset={-40} duration={500}><button className='hero-button'  >View my work</button></Link>
        </div>
    </section>
  )
}

export default Hero