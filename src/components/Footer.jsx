import React from "react";
import WhatsAppICON from '../images/icons/whatsapp.png';
import FacebookICON from '../images/icons/facebook.png';
import YTICON from '../images/icons/youtube.png';
import InstagramICON from '../images/icons/instagram.png';
import FormFooter from "./FormFooter";

const Footer = () => (
    <>
        <footer className="footer" id="nosotros">
            <div className="footer__item" id="f-u">
                <label>
                    Ubicación
                    <br />
                </label>
                <span className="footer__span">!Puedes encontrarnos aqui!</span>
                <br />
                <iframe
                    id="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.9195423513797!2d-98.2600004854411!3d18.979160387143562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfb9aea1ae4861%3A0x9bc7dd9dd985e584!2sLach%20Films!5e0!3m2!1ses!2smx!4v1625102062417!5m2!1ses!2smx"
                    style={{ border: `none`, border: `3px` }}
                    allowFullScreen
                    title="Ubicación de Lach Films, en google maps"></iframe>
            </div>
            <div className="footer__item" id="f-s">
                <label id="about-us">¿Quienes somos?</label>
                <br />
                <div className="about-us">
                    <p>
                        LACH FILMS es una productora enfocada a la realización
                        de proyectos fotográficos y audiovisuales, la cual
                        cuenta con la capacidad y experiencia de nuestros
                        productores y directores.
                    </p>
                </div>
                <label>Follow Us</label>
                <div className="social-media">
                    <a
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=2212209419">
                        <img
                            src={WhatsAppICON}
                            title="Whatsapp de Lach Films"
                        />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.facebook.com/lachfilms">
                        <img
                            src={FacebookICON}
                            title="Facebook de LachFilms"
                        />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.youtube.com/channel/UCV2mYmmNksyvRG295p3IcRg/featured">
                        <img
                            src={YTICON}
                            title="Canal de YouTube de Lach Films"
                        />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.instagram.com/lachfilms/">
                        <img
                            src={InstagramICON}
                            title="Instagram de Lach Films"
                        />
                    </a>
                </div>
            </div>
            <div className="footer__item" id="f-f">
                <label>Escribenos!</label> <br />
                <span className="footer__span">Puedes cotizar $ precios $</span>
                <FormFooter/>
            </div>
        </footer>
        <div id="create">
            <a href="https://create-it.com.mx" target="_blank">
                <label>CreateIt.</label>
            </a>
        </div>
    </>
);

export default Footer;
