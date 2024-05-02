import React from 'react';
import './PricingCard.css';
import '../Portfolio/index.css'
import { Link } from 'react-router-dom';
import { Card, CardGroup } from 'react-bootstrap';

function PricingCard() {
  return (
    <div className='pricing'>
        <div className='card-group'>
            <h1 className=''>PRICING</h1>
            <div className='card'>
                <h3 className='card-header'>- Basic -</h3>
                <span className='bar'></span>
                <p className='btc'>$ 50</p>
                <p>- 2 days -</p>
                <p>- 3 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
                

            </div>
            <div className='card'>
                <h3 className='card-header'>- PREMIUM -</h3>
                <span className='bar'></span>
                <p className='btc'>$ 100</p>
                <p>- 3 days -</p>
                <p>- 5 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
                

            </div>
            <div className='card'>
                <h3 className='card-header'>- BUSINESS -</h3>
                <span className='bar'></span>
                <p className='btc'>$ 200</p>
                <p>- 5 days -</p>
                <p>- 8 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
                

            </div>
            

        </div>

    </div>
  )
}

export default PricingCard