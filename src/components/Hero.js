import {React,useRef, useEffect} from 'react'



const Hero = ({getMouseCoord, coordinates, buttonRef, onClickHandler}) => {
  
  
  //console.log(coordinates)
  const styles = { 
    transform: `perspective(${1000}px) rotateX(${0}deg) rotateY(${0}deg) translateZ(${100}px)`,
  };



  return (
    <section onMouseMove={(e) => getMouseCoord(e)} className='hero' >
        <div className='hero-wrapper' style={styles} >
          <h1 className='hero-title'>My name is Miko, I am a web developer</h1>
          <button className='hero-button' onClick={onClickHandler} ref={buttonRef}>View my work</button>
        </div>
    </section>
  )
}

export default Hero