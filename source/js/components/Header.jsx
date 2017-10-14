import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'><Link to='/'><img src='img/logo.png' className='logo' alt='Kogan' width="240" /></Link></div>
    )
};

export default Header;