import React from 'react';
import './Heroimg.css';
import '../Portfolio/index.css';
import Background from '../Portfolio/images/Background6.jpg';
import { Link } from 'react-router-dom';
function Heroimg() {
  return (
    <div className='hero'>
      <div className='mask'>
        <img src={Background}/>
        </div>
        <div className='content'>
          <p>HI, I'M A FREELANCER</p>
          <h1>Web Designer</h1>
          <p>and</p>
          <h1>React Developer.</h1>
        
        <div className=''>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      <div>
      </div>

      </div>
    </div>
  )
}

export default Heroimg