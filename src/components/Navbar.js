import React from 'react'
import { Link } from "react-scroll";






const NavBar = () => {
    
 
  return (
    <nav className='nav'>
      
      <ul>
        <li>
          <p>
          <Link className='navlink' activeClass="active" to="about" 
          spy={true} smooth={true} offset={-40} duration={500}>About
          </Link></p>
        </li>
        <li>
          <p>
        <Link className='navlink' activeClass="active" to="projects" 
          spy={true} smooth={true} offset={-40} duration={500}>Projects
          </Link></p>
        </li>
        <li>
          <p>
        <Link className='navlink' activeClass="active" to="contact" 
          spy={true} smooth={true} offset={-40} duration={500}>Contact
          </Link></p>
        </li>
      </ul>
    </nav>
    
  )
}

export default NavBar