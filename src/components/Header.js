import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from '../images/logo2.png';

const Header = () => {
    return (
        <header id="header">
            <Link to="/">
                <button id="mainPageBtn">Main Page</button>
            </Link>

            <img src={logo} />

            <Link to="/cart">
                <button id="cartBtn">Cart</button>
            </Link>
        </header>
    )
}

export default Header