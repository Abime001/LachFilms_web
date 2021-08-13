import React from "react";
import LogoIMG from '../images/lach_logo.png';

const Nav = () => (
    <nav>
        <ul className="menu" id="menu">
            <li className="logo">
                <a href="#menu">
                    <img
                        src={LogoIMG}
                        width="50"
                        height="50"
                        alt="Logo de Lach Films, productora fotográfica y audiovisual"
                        title="Logo de Lach Films, productora fotográfica y audiovisual"
                    />
                    <label>LACH FILMS</label>
                </a>
            </li>
            <li className="item">
                <a href="#home">Home</a>
            </li>
            <li className="item">
                <a href="#portafolio">Portafolio</a>
            </li>
            <li className="item">
                <a href="#trav">Travel</a>
            </li>
            <li className="item">
                <a href="#about-us">Nosotros</a>
            </li>
            <li className="toggle">
                <a id="btn__menu_nav" href="#">
                    <i className="fas fa-bars"></i>
                </a>
            </li>
        </ul>
    </nav>
);

export default Nav;