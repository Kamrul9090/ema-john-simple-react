import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt='' />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Manage inventory</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;