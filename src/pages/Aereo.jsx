import React from "react";
import aereoImg1 from "../images/img_aereo/a-img-1.jpg";
import aereoImg2 from "../images/img_aereo/a-img-2.jpg";
import aereoImg3 from "../images/img_aereo/a-img-3.jpg";
import aereoImg4 from "../images/img_aereo/a-img-4.jpg";
import aereoImg5 from "../images/img_aereo/a-img-5.png";
import aereoImg6 from "../images/img_aereo/a-img-6.jpg";
import Mosaico from "../components/Mosaico";
import DivCreate from "../components/DivCreate";
import IconBack from "../components/IconBack";

const Aerero = () => (
    <>
        <div class="load-container">
            <div class="loading-screen"></div>
        </div>

        <main data-barba="container" data-barba-namespace="about-section">
            <div class="header">
                <IconBack/>
                <div class="container-img">
                    <h2>AEREO</h2>
                    <span>
                        En <a href="../index.php">LachFilms</a> entendemos a
                        nuestros clientes y sus necesidades.
                        <br />
                        Ponemos a su dispoción nuestros drones para tomas
                        aereas!.
                        <br />
                        ¿Quieres fotografías o videos desde las alturas? No
                        importa el lugar del que requieras una toma aerea.{" "}
                        <br />
                        Puede ser para publicidad, venta, eventos masivos o
                        pequeños. Nosotros podemos encargarnos,
                        <a href="https://www.lachfilms.com/#about-us">
                            ¡Escríbenos!
                        </a>
                        <br />
                        <a
                            href="../descargas/img_aereo.rar"
                            download="lachfilm - pack aereo.rar">
                            <p id="anuncio">
                                <i>
                                    Puedes descargar nuestras imágenes
                                    totalmente gratis
                                </i>
                            </p>
                        </a>
                    </span>
                    En Lachfilms entendemos a nuestros clientes.
                    <hr />
                    <Mosaico
                        img1={aereoImg1}
                        img2={aereoImg2}
                        img3={aereoImg3}
                        img4={aereoImg4}
                        img5={aereoImg5}
                        img6={aereoImg6}
                    />
                </div>
            </div>
            <DivCreate/>
        </main>
    </>
);

export default Aerero;
