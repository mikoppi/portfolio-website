import React from 'react'



const Hero = ({getMouseCoord}) => {
  console.log(getMouseCoord)
  const styles = { 
    transform: `perspective(${1000}px) rotateX(${getMouseCoord.yCoord}deg) rotateY(${getMouseCoord.xCoord}deg) translateZ(${100}px)`,
  };
  return (
    <section onMouseMove={(e) => getMouseCoord(e)} className='hero' >
        <div className='hero-wrapper' style={styles}>
          <h1 className='hero-title'>My name is Miko, I am a web developer</h1>
          <button className='hero-button'>View my work</button>
        </div>
    </section>
  )
}

export default Hero