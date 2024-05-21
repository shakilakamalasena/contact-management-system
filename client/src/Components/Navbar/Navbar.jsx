import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <a href="" className='navbar-brand'>
                CONTACT MS
            </a>
        </div>
        <div className="navbar-right">
            <a href="/" className="navbar-link">About</a>
            <a href="/login" className="navbar-link">Login</a>
            <a href="/register" className="navbar-link">Register</a>
        </div>
    </div>
  )
}

export default Navbar