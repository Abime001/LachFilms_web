import React from "react";
import IconBack from '../components/IconBack';
import { Link } from "react-router-dom";
import DivCreate from "../components/DivCreate";

const Videos = () => (
    <>
        <div className="load-container">
            <div className="loading-screen"></div>
        </div>

        <main data-barba="container" data-barba-namespace="about-section">
            <div className="header">
                <IconBack/>
                <div className="container-img">
                    <h2>GALERÍA DE VIDEOS</h2>
                    <span>
                        En la galería de videos de{" "}
                        <Link to="/">LachFilms</Link> podrás <br />
                        encontrar nuestros mejores trabajos, ve nuestra
                        experiencia y todo lo que te podemos ofrecer!
                        <br />
                        ¿Tienes en mente alguna idea? <br /> Nuestros expertos
                        en fotografía y video pueden ayudarte a llevar
                        <br /> tu idea a la realidad. Deja que volar la
                        creatividad. Incrementa el valor de tu negocio. <br />
                        <Link to="/#about-us">¡Escríbenos!</Link>
                    </span>
                    <hr />
                    <div className="container-mosaico">
                        <div className="mosaico-row m-video m">
                        <iframe width="760" height="515" src="https://www.youtube.com/embed/8fQYmDNbPdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                    </div>
                </div>
            </div>
            <DivCreate />
        </main>
    </>
);

export default Videos;
