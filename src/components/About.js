import React from 'react'
import Bio from './Bio'
import Tech from './Tech'

const About = () => {
  return (
    <section className='about'>
        <div className='about-wrapper'>
            <Bio/>
            <Tech/>
        </div>
    </section>
  )
}

export default About