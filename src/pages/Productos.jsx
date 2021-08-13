import React from "react";
import BackICON from '../images/icons/back.svg';
import productoImg1 from '../images/img_products/p-img-1.jpg';
import productoImg2 from '../images/img_products/p-img-2.jpg';
import productoImg3 from '../images/img_products/p-img-3.jpg';
import {Link} from 'react-router-dom';

const Productos = () => (
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
                    <h2>PRODUCTOS</h2>
                    <span>
                        <a href="../index.php">LachFilms</a> te ofrece servicios
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
                    <div class="container-mosaico">
                        <div class="mosaico-row">
                            <div class="f-m">
                                <a
                                    href={"../images/img_products/p-img-1.jpg"}
                                    download="lachfilm-productos-imagen1">
                                    <div class="fm-img-m">
                                        <img
                                            class="i-a"
                                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ3MiwzMTN2MTM5YzAsMTEuMDI4LTguOTcyLDIwLTIwLDIwSDYwYy0xMS4wMjgsMC0yMC04Ljk3Mi0yMC0yMFYzMTNIMHYxMzljMCwzMy4wODQsMjYuOTE2LDYwLDYwLDYwaDM5MiAgICBjMzMuMDg0LDAsNjAtMjYuOTE2LDYwLTYwVjMxM0g0NzJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwb2x5Z29uIHBvaW50cz0iMzUyLDIzNS43MTYgMjc2LDMxMS43MTYgMjc2LDAgMjM2LDAgMjM2LDMxMS43MTYgMTYwLDIzNS43MTYgMTMxLjcxNiwyNjQgMjU2LDM4OC4yODQgMzgwLjI4NCwyNjQgICAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcG9seWdvbj4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                                        />
                                    </div>
                                    <img
                                        class="img-m"
                                        src={productoImg1}
                                        alt="Imagen de la sección productos - 1"
                                        title="Imagen de la sección productos - 1"
                                    />
                                </a>
                            </div>
                            <div class="f-m">
                                <a
                                    href="../images/img_products/p-img-2.jpg"
                                    download="lachfilm-productos-imagen2">
                                    <div class="fm-img-m">
                                        <img
                                            class="i-a"
                                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ3MiwzMTN2MTM5YzAsMTEuMDI4LTguOTcyLDIwLTIwLDIwSDYwYy0xMS4wMjgsMC0yMC04Ljk3Mi0yMC0yMFYzMTNIMHYxMzljMCwzMy4wODQsMjYuOTE2LDYwLDYwLDYwaDM5MiAgICBjMzMuMDg0LDAsNjAtMjYuOTE2LDYwLTYwVjMxM0g0NzJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwb2x5Z29uIHBvaW50cz0iMzUyLDIzNS43MTYgMjc2LDMxMS43MTYgMjc2LDAgMjM2LDAgMjM2LDMxMS43MTYgMTYwLDIzNS43MTYgMTMxLjcxNiwyNjQgMjU2LDM4OC4yODQgMzgwLjI4NCwyNjQgICAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcG9seWdvbj4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                                        />
                                    </div>
                                    <img
                                        class="img-m"
                                        src={productoImg2}
                                        alt="Imagen de la sección productos - 2"
                                        title="Imagen de la sección productos - 2"
                                    />
                                </a>
                            </div>
                        </div>
                        <div class="mosaico-row">
                            <div class="f-m">
                                <a
                                    href="../images/img_products/p-img-3.jpg"
                                    download="lachfilm-productos-imagen3">
                                    <div class="fm-img-m">
                                        <img
                                            class="i-a"
                                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ3MiwzMTN2MTM5YzAsMTEuMDI4LTguOTcyLDIwLTIwLDIwSDYwYy0xMS4wMjgsMC0yMC04Ljk3Mi0yMC0yMFYzMTNIMHYxMzljMCwzMy4wODQsMjYuOTE2LDYwLDYwLDYwaDM5MiAgICBjMzMuMDg0LDAsNjAtMjYuOTE2LDYwLTYwVjMxM0g0NzJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwb2x5Z29uIHBvaW50cz0iMzUyLDIzNS43MTYgMjc2LDMxMS43MTYgMjc2LDAgMjM2LDAgMjM2LDMxMS43MTYgMTYwLDIzNS43MTYgMTMxLjcxNiwyNjQgMjU2LDM4OC4yODQgMzgwLjI4NCwyNjQgICAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcG9seWdvbj4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                                        />
                                    </div>
                                    <img
                                        class="img-m"
                                        src={productoImg3}
                                        alt="Imagen de la sección productos - 3"
                                        title="Imagen de la sección productos - 3"
                                    />
                                </a>
                            </div>
                            <div class="f-m">
                                <a
                                    href="../images/img_products/p-img-3.jpg"
                                    download="lachfilm-productos-imagen3">
                                    <div class="fm-img-m">
                                        <img
                                            class="i-a"
                                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ3MiwzMTN2MTM5YzAsMTEuMDI4LTguOTcyLDIwLTIwLDIwSDYwYy0xMS4wMjgsMC0yMC04Ljk3Mi0yMC0yMFYzMTNIMHYxMzljMCwzMy4wODQsMjYuOTE2LDYwLDYwLDYwaDM5MiAgICBjMzMuMDg0LDAsNjAtMjYuOTE2LDYwLTYwVjMxM0g0NzJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwb2x5Z29uIHBvaW50cz0iMzUyLDIzNS43MTYgMjc2LDMxMS43MTYgMjc2LDAgMjM2LDAgMjM2LDMxMS43MTYgMTYwLDIzNS43MTYgMTMxLjcxNiwyNjQgMjU2LDM4OC4yODQgMzgwLjI4NCwyNjQgICAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcG9seWdvbj4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                                        />
                                    </div>
                                    <img
                                        class="img-m"
                                        src={productoImg1}
                                        alt="Imagen de la sección productos - 3"
                                        title="Imagen de la sección productos - 3"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="create">
                <a href="https://create-it.com.mx" target="_blank">
                    <label>Create It.</label>
                </a>
            </div>
        </main>
    </>
);

export default Productos;
