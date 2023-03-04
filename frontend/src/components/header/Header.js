import React from 'react';
import './header.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import title_logo from './logo.png';

export default function Header(props){
    return(
        <>
            <div className="headernav">
                <div className='navProject-title'>
                    <span><Link to='/'><img src={title_logo} alt='website title logo'/>City Weather</Link></span>
                </div>
            </div>
        </>
    );
}

Header.prototype = {
    tittle: PropTypes.string.isRequired
}
Header.defaultProps = {
    tittle: 'Set tittle here'
}

