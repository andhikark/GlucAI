import React, {useState } from "react"
import '../App.css';
import headerImage from '../image/header.png';
import hamburger from '../image/ham-menu-icon.png';
import closeIcon from '../image/close-icon.png';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';


function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return(
        <header className="header bg-blue">
            <nav className={`navbar bg-blue ${isMenuOpen ? "navbar-show" : ""}`}>
            <div className="container flex">
                <a
                    href="#"
                    className="navbar-brand"
                    onClick={() => scroll.scrollToTop({ duration: 700 })}
                >
                <h1>GlucAI</h1>
                </a>
                <button type="button" className="navbar-show-btn" onClick={toggleMenu}>
                <img src={hamburger} alt="menu" />
                </button>

                <div className={`navbar-collapse bg-white ${isMenuOpen ? "navbar-show" : ""}`}>
                <button type="button" className="navbar-hide-btn" onClick={toggleMenu}>
                    <img src={closeIcon} alt="close" />
                </button>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a
                        href="#"
                        className="nav-link"
                        onClick={() => scroll.scrollToTop({ duration: 700 })}
                        >
                        Home
                        </a>
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
                    <Link to="/form" className="btn btn-light-blue">Run Diabetes test</Link>
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

