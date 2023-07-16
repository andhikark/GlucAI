import React from "react"
import '../App.css';
import headerImage from '../image/header.png';
import hamburger from '../image/ham-menu-icon.png';
import closeIcon from '../image/close-icon.png';

function Header(){
    return(
        <header className="header bg-blue">
            <nav className="navbar bg-blue">
            <div className="container flex">
                <a href="" className="navbar-brand">
                <h1>GlucAI</h1>
                </a>
                <button type="button" className="navbar-show-btn">
                <img src={hamburger} alt="menu" />
                </button>

                <div className="navbar-collapse bg-white">
                <button type="button" className="navbar-hide-btn">
                    <img src={closeIcon} alt="close" />
                </button>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a href="#" className="nav-link">Home</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

            <div className="header-inner text-white text-center">
            <div className="container grid">
                <div className="header-inner-left">
                <h1>most trusted<br /> <span>health partner</span></h1>
                <p className="lead">the best Glucose checker services for you</p>
                <p className="text text-md">Uncover hidden risks, take charge of your well-being, and embrace a healthier future with our AI-powered diabetes detection solutions.</p>
                <div className="btn-group">
                    <a href="#" className="btn btn-light-blue">Run Diabetes test</a>
                </div>
                </div>
                <div className="header-inner-right">
                <img src={headerImage} alt="header" />
                </div>
            </div>
            </div>
        </header>
    );
}

export default Header;

