import React from "react";
import WhatsAppICON from '../images/img-no-modificar/icons/whatsapp.png';
import FacebookICON from '../images/img-no-modificar/icons/facebook.png';
import YtIcon from '../images/img-no-modificar/icons/youtube.png';
import InstagramICON from '../images/img-no-modificar/icons/instagram.png';
import FormFooter from "./FormFooter";
import DivCreate from "./DivCreate";
import IconFooter from "./IconFooter";
import CodigoCliente from "./CodigoCliente";
import LinksFooter from "./LinksFooter";

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
                    <IconFooter icon={WhatsAppICON} url="https://api.whatsapp.com/send?phone=2212209419" title="Whatsapp de lachfilms"/>
                    <IconFooter icon={FacebookICON} url="https://www.facebook.com/lachfilms" title="Facebook de LachFilms"/>
                    <IconFooter icon={YtIcon} url="https://www.youtube.com/channel/UCV2mYmmNksyvRG295p3IcRg/featured" title="Canal de YouTube de Lach Films"/>
                    <IconFooter icon={InstagramICON} url="https://www.instagram.com/lachfilms/" title="Instagram de Lach Films"/>
                </div>
            </div>
            <div className="footer__item" id="f-f">
                <label>Escribenos!</label> <br />
                <span className="footer__span">Puedes cotizar $ precios $</span>
                <FormFooter/>
            </div>
            {/* <div className="footer__item">
                <LinksFooter/>
            </div> */}
        </footer>
        <DivCreate/>
    </>
);

export default Footer;
