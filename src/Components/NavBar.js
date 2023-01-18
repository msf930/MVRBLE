import {useRef} from "react"
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css";
import Shop from "../Pages/Shop";
import About from "../Pages/About";
import { Route, Link } from 'react-router-dom';

function NavBar(){
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <a className="logo" href="/"> MVRBLE</a>
            <nav ref = {navRef}>
                <a href="/Shop">SHOP</a>
                <a href="/About">ABOUT</a>
                <a href="/Contact">CONTACT</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default NavBar;