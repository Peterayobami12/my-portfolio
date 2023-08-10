import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faHome, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <h5><FontAwesomeIcon icon={faHome} className="homeIcon"/>
                    
                        <p>No 3, Bintin Estate
                        Badagry Lagos</p>
                    </h5>
                </div>
                <div className='phone'>
                    <h5><FontAwesomeIcon icon={faPhone} className="phoneIcon"/>
                    
                        <p>(+234)8132413525
                        (+234)9074987890</p></h5>
                    

                </div>
                <div className='email'>
                    <h5><FontAwesomeIcon icon={faMailBulk} className="emailIcon"/>
                    
                        <p>petersmith19950@gmail.com</p>
                        
                        </h5>
                    

                </div>
            </div>
            <div className='right'>
                <h5>About</h5>
                <p>I'm Ajayi Peter, a web designer and
                     React developer. I enjoy discussing new
                      projects and design challenges. </p>
             <div className='social'>
             <Link to="https://web.facebook.com/goodlarson"><FontAwesomeIcon icon={faFacebook} className="facebookIcon"/></Link>
               <Link to="https://twitter.com/AjayiPe717536650000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000">  <FontAwesomeIcon icon={faTwitter} className="twitterIcon"/></Link>
                 <Link to="https://www.linkedin.com/in/peter-ajayi-39a37524a/"><FontAwesomeIcon icon={faLinkedin} className="linkedinIcon"/></Link>
             </div>
            </div>

        </div>
    </div>
  )
}

export default Footer