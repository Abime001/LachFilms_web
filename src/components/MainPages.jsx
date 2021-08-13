import React from "react";

const MainPages = ({title, content1, content2, content3}) => (
    <>
        <h2>SOCIAL</h2>
        <span>
            En <a href="../index.php">LachFilms</a> entendemos a nuestros
            clientes.
            <br />
            Es por eso que ofrecemos nuestros servicios de fotografía y video,
            para capturar juntos tus momentos especiales.
            <br />
            Confía en nosotros para cubrir tu evento y disfruta de la mejor
            manera, conservando un bello recuerdo.
            <br />
            Visita nuestras redes sociales para ver nuestro trabajo o
            <a href="https://www.lachfilms.com/#about-us">¡Escríbenos!</a>
            <br />
            <a
                href="../descargas/img_social.rar"
                download="lachfilm - pack social.rar">
                <p id="anuncio">
                    <i>Puedes descargar nuestras imágenes totalmente gratis</i>
                </p>
            </a>
        </span>
    </>
);

export default MainPages;
