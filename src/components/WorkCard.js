import React from 'react';
import Food from '../Portfolio/images/eateryweb.jpeg';
import Allumaer from '../Portfolio/images/allumaer.jpeg';
import Farm from '../Portfolio/images/farmweb.jpeg';
import Mycade from '../Portfolio/images/mycade.jpeg';
import Tenzie from '../Portfolio/images/tenziegame.jpeg';
import School from '../Portfolio/images/schoolweb.jpeg';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './WorkCard.css';
import './WorkCardData';
import './Work';

function WorkCard(props) {
  return (

        <div className='work-container'>
            <h1 className='project-heading'></h1>
            <div className='project-container'>
                <div className='card-group'>
            <div className='card'>
                <img src={props.imgsrc} className="card-img-top" />
                <div className='card-body text-center'>
                    <h3 className='card- text-center'>{props.title}</h3>
                    <p className='card-text text-center'>{props.text}</p>
                    <div className='pro-btns'>
                            <Link to="" className='btn'>View</Link>
                            <Link to="" className='btn'>Source</Link>
                            </div>
                        

                    </div>
                </div>

            </div>

            </div>


        </div>
    
  )
}

export default WorkCard