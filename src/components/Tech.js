import React, { useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


const Skill = ({ name, icon }) => {
    return (
      <div className='skill'>
        <i className={`${icon} colored`}></i>
        <p>{name}</p>
      </div>
    )
  }

  const SkillsCarousel = () => {
    const [emblaRef] = useEmblaCarousel(
      { loop: true, dragFree: true },
      [Autoplay({ delay: 2000 }, (emblaRoot) => emblaRoot.parentElement)]
    )
  
   
    return (
      <div className='skills'>
        <div className='skills-carousel' ref={emblaRef}>
          <div className='skills-carousel__container'>
            <Skill name='html5' icon='devicon-html5-plain' />
            <Skill name='css3' icon='devicon-css3-plain' />
            <Skill name='javascript' icon='devicon-javascript-plain' />
            <Skill name='react' icon='devicon-react-original' />
            <Skill name='sass' icon='devicon-sass-original' />
            <Skill name='git' icon='devicon-git-plain' />
            <Skill name='webpack' icon='devicon-webpack-plain' />
            <Skill name='npm' icon='devicon-npm-original-wordmark' />
          </div>
        </div>
        
      </div>
    )
  }



const Tech = () => {

    useEffect(() => {}, [])

  return (
    <div className='tech-wrapper'>
        <h3 className='skills-title'>Skills</h3>
        <SkillsCarousel/>
    </div>
  )
}

export default Tech