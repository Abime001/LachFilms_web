import React from "react";
import Video from '../video/logo_animado.mp4';

const Video_Header = () => (
    <section id="home" className="video">
        <div>
            <video
                autoPlay
                muted
                loop
                width="100%"
                title="Lach Films video de bienvenida">
                <source src={Video} />
            </video>
        </div>

        <div className="card">
            <div className="card-texto">
                <h2 id="titulo-video">
                    PRODUCCIÓN FOTOGRÁFICA Y AUDIOVISUAL A TU MEDIDA
                </h2>
            </div>
            <div className="card-description">
                ¡Escribenos! Cotizamos tu propuesta con la mejor calidad
                posible. Solo en LACH FILMS.
            </div>
            <div className="card-butron">
                <a href="#about-us" className="animated-button thar-three">
                    Contactanos
                </a>
            </div>
        </div>
    </section>
);

export default Video_Header;
