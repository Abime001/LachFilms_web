import React from "react";
import BackICON from "../images/icons/back.svg";
import { Link } from "react-router-dom";
import DivCreate from "../components/DivCreate";
import IframeVideos from "../components/IframesVideos";

const Videos = () => (
    <>
        <div class="load-container">
            <div class="loading-screen"></div>
        </div>

        <main data-barba="container" data-barba-namespace="about-section">
            <div class="header">
                <div class="animate-this btn-back">
                    <Link to="/">
                        <img
                            src={BackICON}
                            width="50px"
                            alt="Flecha para regresar a la página anterior"
                        />
                    </Link>
                </div>
                <div class="container-img">
                    <h2>GALERÍA DE VIDEOS</h2>
                    <span>
                        En la galería de videos de{" "}
                        <a href="../index.php">LachFilms</a> podrás <br />
                        encontrar nuestros mejores trabajos, ve nuestra
                        experiencia y todo lo que te podemos ofrecer!
                        <br />
                        ¿Tienes en mente alguna idea? <br /> Nuestros expertos
                        en fotografía y video pueden ayudarte a llevar
                        <br /> tu idea a la realidad. Deja que volar la
                        creatividad. Incrementa el valor de tu negocio. <br />
                        <a href="../index.php#about-us">¡Escríbenos!</a>
                    </span>
                    <hr />
                    <div class="container-mosaico">
                        <div class="mosaico-row m-video m">
                        <iframe width="760" height="515" src="https://www.youtube.com/embed/videoseries?list=PLXZ6sO1TY9PvCfE39_lOXbMezijg85wlu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                    </div>
                </div>
            </div>
            <DivCreate />
        </main>
    </>
);

export default Videos;
