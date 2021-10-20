import React from "react";

const Mosaico = ({img1, img2, img3, img4, img5, img6}) => (
    <div className="container-mosaico">
        <div className="mosaico-row">
            <div className="f-m">
                <a>
                    <img
                        className="img-m"
                        src={img1}
                        alt="Imagen de la sección turismo - 1"
                        title="Imagen de la sección turismo - 1"
                    />
                </a>
            </div>
            <div className="f-m">
                <a>
                    <img
                        className="img-m"
                        src={img2}
                        alt="Imagen de la sección turismo - 2"
                        title="Imagen de la sección turismo - 2"
                    />
                </a>
            </div>
        </div>
        <div className="mosaico-row">
            <div className="f-m">
                <a>
                    <img
                        className="img-m"
                        src={img3}
                        alt="Imagen de la sección turismo - 3"
                        title="Imagen de la sección turismo - 3"
                    />
                </a>
            </div>
            <div className="f-m">
                <a>
                    <img
                        className="img-m"
                        src={img4}
                        alt="Imagen de la sección turismo - 4"
                        title="Imagen de la sección turismo - 4"
                    />
                </a>
            </div>
        </div>
        <div className="mosaico-row">
            <div className="f-m">
                <a>
                    <img
                        className="img-m"
                        src={img5}
                        alt="Imagen de la sección turismo - 5"
                        title="Imagen de la sección turismo - 5"
                    />
                </a>
            </div>
            <div className="f-m">
                <a>
                    <img
                        className="img-m"
                        src={img6}
                        alt="Imagen de la sección turismo - 6"
                        title="Imagen de la sección turismo - 6"
                    />
                </a>
            </div>
        </div>
    </div>
);

export default Mosaico;
