import React from "react";
import productoImg1 from "../images/img_products/p-img-1.jpg";
import productoImg2 from "../images/img_products/p-img-2.jpg";
import productoImg3 from "../images/img_products/p-img-3.jpg";
import Mosaico from "../components/Mosaico";
import DivCreate from "../components/DivCreate";
import IconBack from "../components/IconBack";

const Productos = () => (
    <>
        <div class="load-container">
            <div class="loading-screen"></div>
        </div>

        <main data-barba="container" data-barba-namespace="about-section">
            <div class="header">
                <IconBack/>
                <div class="container-img">
                    <h2>PRODUCTOS</h2>
                    <span>
                        En <a href="../index.php">LachFilms</a> te ofrece servicios
                        de fotografía y video.
                        <br />
                        ¿Quieres capturar la esencia de tus productos? <br />{" "}
                        Nuestros expertos en fotografía de producto pueden
                        ayudarte a mostrar
                        <br /> la mejor cara de tus productos. Deja volar la
                        creatividad. Incrementa el valor de tu negocio <br />{" "}
                        con estas increibles fotografías.
                        <a href="https://www.lachfilms.com/#about-us">
                            ¡Escríbenos!
                        </a>
                        <br />
                        <a
                            href="../descargas/img_products.rar"
                            download="lachfilm - pack products.rar">
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
                        img1={productoImg1}
                        img2={productoImg2}
                        img3={productoImg3}
                        img4={productoImg1}
                        img5={productoImg2}
                        img6={productoImg3}
                    />
                </div>
            </div>
            <DivCreate/>
        </main>
    </>
);

export default Productos;
