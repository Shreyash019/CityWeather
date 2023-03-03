import React from 'react';
import './css/mainhome.css';
import userRightGif from '../img/weather1.gif'
import { Link } from 'react-router-dom';

function Homepage(props) {
  return (
    <div className='homepage-container'>
      <div className='mainpage-top-content'>
        <div className='mainpage-top-content-left'>
          <div className='mainpage-top-content-left-details'>
            <p>This is React basic project.</p>
            <p>You can get weather of your city just by entering city name.</p>
            <button type="submit"><Link to='/weather'>Weather</Link></button>
          </div>
        </div>
        <div className='mainpage-top-content-right'>
          <img src={userRightGif} alt="loading..."/>
        </div>
      </div>
      <br/><br/>
    </div>
  )
}

export default Homepage;