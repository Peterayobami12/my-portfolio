import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import '../Portfolio/index.css'


function Navbar() {
  const[click, setClick] = React.useState()
  function toggleMenu(){
    setClick(prevClick =>!prevClick)
  }
  const[color, setColor] = React.useState(false);
  function changeColor(){
    if(window.scrollY>= 100){
      setColor(true);
    } else{
      setColor(false)
    }
  };
  window.addEventListener("scroll", changeColor);
  
  return (
    <div className='heading'>
    <div className= {color? 'header header-bg' : "header"}>
        <Link to='/' className='nav-link'>
            <h1>Portfolio</h1>
        </Link>
        <ul className={click? 'nav-menu-active':'nav-menu'}>
          <li>
            <Link to='/' className='nav-link'>Home</Link>
          </li>
          <li>
            <Link to='/project'  className='nav-link'>Project</Link>
          </li>
          <li>
            <Link to='/about'  className='nav-link'>About</Link>
          </li>
          <li>
            <Link to='/contact'  className='nav-link'>Contact</Link>
          </li>
        </ul>
        <div className='contain' onClick={toggleMenu}>
                {click? <FontAwesomeIcon icon={faTimes} className='icon'/> : <FontAwesomeIcon icon={faBars} className='icon' />}
               </div>

    </div>
    </div>
  )
}

export default Navbar