import React from "react";
import productoImg1 from "../images/pagina_productos/p-img-1.jpg";
import productoImg2 from "../images/pagina_productos/p-img-2.jpg";
import productoImg3 from "../images/pagina_productos/p-img-3.jpg";
import Mosaico from "../components/Mosaico";
import DivCreate from "../components/DivCreate";
import IconBack from "../components/IconBack";
import {Link} from 'react-router-dom';

const Productos = () => (
    <>
        <div className="load-container">
            <div className="loading-screen"></div>
        </div>

        <main data-barba="container" data-barba-namespace="about-section">
            <div className="header">
                <IconBack/>
                <div className="container-img">
                    <h2>PRODUCTOS</h2>
                    <span>
                        En <Link to="/">LachFilms</Link> te ofrece servicios
                        de fotografía y video.
                        <br />
                        ¿Quieres capturar la esencia de tus productos? <br />{" "}
                        Nuestros expertos en fotografía de producto pueden
                        ayudarte a mostrar
                        <br /> la mejor cara de tus productos. Deja volar la
                        creatividad. Incrementa el valor de tu negocio <br />{" "}
                        con estas increibles fotografías. 
                        <a href="/#about-us">
                            ¡Escríbenos!
                        </a>
                        <br />
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
