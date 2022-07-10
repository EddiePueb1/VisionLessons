import React, { Component} from 'react'
import {animateScroll as Scroll, Link} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

import './Nav.css'

class Navbar extends Component {

  
  
  render() {

    

    return(
      
      <nav>
        <LinkR to="/" className='logo'> 
          Robo
        </LinkR>        
        <ul>
          <Link to='L1' 
          className='nav-link'
          smooth={true}
          duration={1000}
          spy={true}
          exact={true}
          >Lesson 1</Link>

          <Link to='L2' 
          className='nav-link'
          smooth={true}
          duration={1000}
          spy={true}
          exact={true}
          >Lesson 2</Link>

          <Link to='L3' 
          className='nav-link'
          smooth={true}
          duration={1000}
          spy={true}
          exact={true}
          >Lesson 3</Link>

          <Link to='L4' 
          className='nav-link'
          smooth={true}
          duration={1000}
          spy={true}
          exact={true}
          >Lesson 4</Link>
        </ul>

      </nav>
      
    )
  }
}

export default Navbar
