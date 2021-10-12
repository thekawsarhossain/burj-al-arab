import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/header.png';
import logo from '../../images/icons/logo.png';
import { Avatar, Button } from '@material-ui/core';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, signOutHandler } = useAuth();


    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt="" />
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/book">Book</Link>
                    </li>
                    {!user.email ? <li>
                        <Link to="/login">Login</Link>
                    </li> :
                        <div className="user">
                            <Avatar alt="Remy Sharp" src={user.photoURL} />
                            <Button onClick={signOutHandler} variant="contained" color="teal">Logout</Button>
                        </div>}
                </ul>

            </nav>
            <div className="title-container">
                <h1>Burj Al Arab</h1>
                <h2>A global icon of Arabian luxury</h2>
            </div>
        </div>
    );
};

export default Header;