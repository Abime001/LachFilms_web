import React from "react";
import {Link} from 'react-router-dom';

const Portafolio = () => (
    <section id="portafolio">
        <div className="portafolio-info"></div>
        <h2 id="h2-portafolio">PORTAFOLIO</h2>
        <div className="portafolio-container">
            <div className="d-v d-social">
                <Link
                    to="/social"
                    id="btn-social"
                    className="filtro-social">
                    <div className="info">
                        <h3>SOCIAL</h3>
                        <p className="p-portafolio">
                            No te arrepentirás de vivir la experiencia de una
                            sesión fotografíca profesional. Preserva esos
                            momentos tan emocionantes. Bodas, festivales,
                            fiestas y muchos eventos más.
                        </p>
                    </div>
                </Link>
            </div>
            <div className="d-h">
                <div className="d-producto">
                    <Link
                        to="/producto"
                        id="btn-producto"
                        className="filtro-producto">
                        <div className="info">
                            <h3>PRODUCTO</h3>
                            <p className="p-portafolio">
                                ¿Quieres que tus productos se vean perfectos?
                                Ven con nosotros y deja que hagamos la magía que
                                necesitas en tus productos para que sean tan
                                atractivos como puedas imaginarlos.
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="d-aereo">
                    <Link
                        to="/aereo"
                        id="btn-aereo"
                        className="filtro-aereo">
                        <div className="info">
                            <h3>AEREO</h3>
                            <p className="p-portafolio">
                                Que mejor que una toma aerea para mostrar todo
                                lo que tu ciudad puede ofrecer. Asombra en tu
                                perfil, eventos o negocio con las mejores tomas
                                aereas que LachFilms te puede ofrecer. ¿lo
                                imaginas? Lo podemos hacer.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="d-v d-turismo">
                <Link
                    to="/turismo"
                    id="btn-turismo"
                    className="filtro-turismo">
                    <div className="info">
                        <h3>TURISMO</h3>
                        <p className="p-portafolio">
                            Permite que te acompañemos en tu viaje y deja que
                            capturemos en video o fotografía la experiencia de
                            vivir la cultura del lugar que visites. Tu te
                            encargas de disfrutar y nosotros de enmarcarte.
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    </section>
);

export default Portafolio;
