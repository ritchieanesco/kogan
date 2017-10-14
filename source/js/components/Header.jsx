import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

const Header = () => {
    return (
        <div className='header'><Link to='/'><img src={logo} className='logo' alt='Kogan' width="240" /></Link></div>
    )
};

export default Header;