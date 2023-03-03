import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import title_logo from '../header/logo.png';

export default function Footer(){
    return(
      <div className='footer'>
        <div className='footer-top'>
          <div className='footer-top-content'>
            <h3>City Weather <img src={title_logo} alt='website title logo'/></h3>
            <p><Link to='/'>About CityWeather</Link></p>
            <p><Link to='/'>Developer</Link></p>
            <p><Link to='/weather'>Weather</Link></p>
          </div>
          <br/><hr/>
        </div>     
        <div className='footer-bottom'>
          <p>@2023 City Weather, ALl Rights Reserved.</p>
        </div>
      </div>
    );
}
