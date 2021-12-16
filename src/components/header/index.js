import React from "react";
import  './header.scss'

const Header = () => {
    return (
        <div className="header">
                <div className="header__riot-logo"></div>
            <div className="header__border"></div>
            <div className="header__valorant-logo"></div>
            <nav className="header__navbar">
                <a className='header__navbar-item' href="/#">GAME</a>
                <a className='header__navbar-item' href="/#">CHAMPIONS</a>
                <a className='header__navbar-item' href="/#">NEWS</a>
                <a className='header__navbar-item' href="/#">PATCH NOTES</a>
                <a className='header__navbar-item' href="/#">DISCOVER</a>
                <a className='header__navbar-item' href="/#">ESPORTS</a>
                <a className='header__navbar-item' href="/#">UNIVERSE</a>
                <a className='header__navbar-item' href="/#">SHOP</a>
                <a className='header__navbar-item' href="/#">SUPPORT</a>
            </nav>
            <div className="header__user-avatar"></div>
            <div className="header__user-name">Kirill</div>
        </div>
    )
}
export default Header