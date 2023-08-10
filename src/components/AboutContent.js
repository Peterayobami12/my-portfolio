import React from 'react';
import './AboutContent.css';
import {Link} from 'react-router-dom';
import '../Portfolio/index.css';
import react2 from '../Portfolio/images/react2.png';
import react3 from '../Portfolio/images/react3.png'

export default function AboutContent() {
  return (
    <div className='about'>
      <div className='about-pro'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>I'm a front-end developer(reactjs). I creates
                responsive secure websites for my client.
            </p>
            <Link to="/contact" className='btn'>
              Contact</Link>

        </div>
        <div className='right'>
            <div className='img-container'>
              <div className='img-stack bottom'>
                <img src={react2} className="img" alt='' />
              </div>
              <div className='img-stack top'>
                <img src={react3} className="img" alt='' />
              </div>
                

            </div>
            
              
                

            </div>
            </div>

        </div>
    
  )
}
