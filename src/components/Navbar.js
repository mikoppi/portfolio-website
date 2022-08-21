import React from 'react'
import { Link } from "react-scroll";
import { AiOutlineMail } from 'react-icons/ai';





const NavBar = () => {

  
    
 
  return (
    <nav className='nav'>
          <Link className='navlink' activeClass="active" to="hero" 
          spy={true} smooth={true} offset={-40} duration={500}>Home
          </Link>
      
          <Link className='navlink' activeClass="active" to="about" 
          spy={true} smooth={true} offset={-40} duration={500}>About
          </Link>
      
        <Link className='navlink' activeClass="active" to="projects" 
          spy={true} smooth={true} offset={-40} duration={500}>Projects
          </Link>
       
        <Link className='navlink' activeClass="active" to="contact" 
          spy={true} smooth={true} offset={-40} duration={500}>{<AiOutlineMail size={35}/>}
          </Link>
        
    </nav>
    
  )
}

export default NavBar