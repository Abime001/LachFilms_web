import React from "react";
import SocialImg1 from "../images/img_social/s-img-1.jpg";
import SocialImg2 from "../images/img_social/s-img-2.jpg";
import SocialImg3 from "../images/img_social/s-img-3.jpg";
import SocialImg4 from "../images/img_social/s-img-4.jpg";
import SocialImg5 from "../images/img_social/s-img-5.jpg";
import SocialImg6 from "../images/img_social/s-img-6.jpg";
import Mosaico from "../components/Mosaico";
import DivCreate from "../components/DivCreate";
import IconBack from "../components/IconBack";

const Social = () => {
    return (
        <>
            <div class="load-container">
                <div class="loading-screen"></div>
            </div>

            <main data-barba="container" data-barba-namespace="about-section">
                <div class="header">
                    <IconBack/>
                    <div class="container-img">
                        <h2>SOCIAL</h2>
                        <span>
                            En <a href="../index.php">LachFilms</a> entendemos a
                            nuestros clientes.
                            <br />
                            Es por eso que ofrecemos nuestros servicios de
                            fotografía y video, para capturar juntos tus
                            momentos especiales.
                            <br />
                            Confía en nosotros para cubrir tu evento y disfruta
                            de la mejor manera, conservando un bello recuerdo.
                            <br />
                            Visita nuestras redes sociales para ver nuestro
                            trabajo o
                            <a href="https://www.lachfilms.com/#about-us">
                                ¡Escríbenos!
                            </a>
                            <br />
                            <a
                                href="../descargas/img_social.rar"
                                download="lachfilm - pack social.rar">
                                <p id="anuncio">
                                    <i>
                                        Puedes descargar nuestras imágenes
                                        totalmente gratis
                                    </i>
                                </p>
                            </a>
                        </span>
                        <hr />
                        <Mosaico
                            img1={SocialImg1}
                            img2={SocialImg2}
                            img3={SocialImg3}
                            img4={SocialImg4}
                            img5={SocialImg5}
                            img6={SocialImg6}
                        />
                    </div>
                    <DivCreate/>
                </div>
            </main>
        </>
    );
};

export default Social;