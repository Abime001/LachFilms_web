<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 user-scalable=no, maximun-scale=1.0, minimum-scalable=1.0"
        />
        <title>Lach Films</title>
        <!-- de 32px shortcut icon -->
        <link rel="shortcut icon" href="images/icons/lach_logo.ico" />
        <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
            integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
            crossorigin="anonymous"
        />
        <link rel="stylesheet" href="CSS/normalize.css" />
        <link rel="stylesheet" href="CSS/styles.css" />
        <link rel="stylesheet" href="CSS/responsive.css" />
    </head>
    <body>
        <!-- NAV -->
        <nav>
            <ul class="menu">
                <li class="logo">
                    <a href="#home"
                        ><img
                            src="images/lach_logo.png"
                            width="50px"
                            height="50px"
                            alt="Logotipo de Lach Films"
                    /></a>
                </li>
                <li class="item"><a href="#home">Home</a></li>
                <li class="item"><a href="#portafolio">Portafolio</a></li>
                <li class="item"><a href="#travel">Travel</a></li>
                <li class="item"><a href="#about-us">Nosotros</a></li>
                <li class="item lach"><label>LACH FILMS</label></li>
                <li class="toggle">
                    <a id="btn__menu_nav" href="#"
                        ><i class="fas fa-bars"></i
                    ></a>
                </li>
            </ul>
        </nav>
        <button id="go__up"><i class="fas fa-caret-square-up"></i></button>

        <!-- HOME -->
        <div id="home" class="video">
            <video autoplay muted loop width="100%" height="100%">
                <source src="video/logo_animado.mp4" />
            </video>
        </div>

        <!-- SECCION TRAVEL -->
        <section id="travel">
            <video
                src="./video/travel.mp4"
                autoplay
                muted
                loop
                width="100%"
            ></video>
        </section>

        <!-- SECCION PORTAFOLIO -->
        <section id="portafolio">
            <h2>PORTAFOLIO</h2>

            <div class="portafolio-container">
                <div class="d-v d-social">
                    <a href="#social" id="btn-social" class="filtro-social">
                        <div class="info">
                            <h3>SOCIAL</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Repellat eum laudantium autem
                                fugit, esse harum magni culpa ea accusantium vel
                                ducimus earum ad ex, unde omnis sint ut porro
                                architecto?
                            </p>
                        </div>
                    </a>
                </div>
                <div class="d-h">
                    <div class="d-producto">
                        <a
                            href="#producto"
                            id="btn-producto"
                            class="filtro-producto"
                        >
                            <div class="info">
                                <h3>PRODUCTO</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Repellat eum laudantium
                                    autem fugit, esse harum magni culpa ea
                                    accusantium vel ducimus earum ad ex, unde
                                    omnis sint ut porro architecto?
                                </p>
                            </div>
                        </a>
                    </div>

                    <div class="d-aereo">
                        <a href="#aereo" id="btn-aereo" class="filtro-aereo">
                            <div class="info">
                                <h3>AEREO</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Repellat eum laudantium
                                    autem fugit, esse harum magni culpa ea
                                    accusantium vel ducimus earum ad ex, unde
                                    omnis sint ut porro architecto?
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="d-v d-turismo">
                    <a href="#turismo" id="btn-turismo" class="filtro-turismo">
                        <div class="info">
                            <h3>TURISMO</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Repellat eum laudantium autem
                                fugit, esse harum magni culpa ea accusantium vel
                                ducimus earum ad ex, unde omnis sint ut porro
                                architecto?
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        <!-- SECCION DESPLEGABLE DEL PORTAFOLIO -->
        <section id="social" class="section">
            <h3>SOCIAL</h3>
            <!-- SnapWidget -->
            <script src="https://snapwidget.com/js/snapwidget.js"></script>
            <iframe
                src="https://snapwidget.com/embed/946900"
                class="snapwidget-widget"
                allowtransparency="true"
                frameborder="0"
                scrolling="no"
                style="border: none; overflow: hidden; width: 100%"
            ></iframe>
            <img
                id="arrow_s"
                class="section-arrow"
                src="./images/icons/arrow.png"
                alt="icono de flecha"
            />
        </section>

        <section class="section" id="producto">
            <h3>PRODUCTO</h3>
            <!-- SnapWidget -->
            <script src="https://snapwidget.com/js/snapwidget.js"></script>
            <iframe
                src="https://snapwidget.com/embed/946900"
                class="snapwidget-widget"
                allowtransparency="true"
                frameborder="0"
                scrolling="no"
                style="border: none; overflow: hidden; width: 100%"
            ></iframe>
            <img
                id="arrow_p"
                class="section-arrow"
                src="./images/icons/arrow.png"
                alt="icono de flecha"
            />
        </section>

        <section class="section" id="aereo">
            <h3>AEREO</h3>
            <!-- SnapWidget -->
            <script src="https://snapwidget.com/js/snapwidget.js"></script>
            <iframe
                src="https://snapwidget.com/embed/946900"
                class="snapwidget-widget"
                allowtransparency="true"
                frameborder="0"
                scrolling="no"
                style="border: none; overflow: hidden; width: 100%"
            ></iframe>
            <img
                id="arrow_a"
                class="section-arrow"
                src="./images/icons/arrow.png"
                alt="icono de flecha"
            />
        </section>

        <section class="section" id="turismo">
            <h3>TURISMO</h3>
            <!-- SnapWidget -->
            <script src="https://snapwidget.com/js/snapwidget.js"></script>
            <iframe
                src="https://snapwidget.com/embed/946900"
                class="snapwidget-widget"
                allowtransparency="true"
                frameborder="0"
                scrolling="no"
                style="border: none; overflow: hidden; width: 100%"
            ></iframe>
            <img
                id="arrow_t"
                class="section-arrow"
                src="./images/icons/arrow.png"
                alt="icono de flecha"
            />
        </section>

        <!-- FOOTER -->
        <footer class="footer" id="nosotros">
            <div class="footer__item" id="f-u">
                <label for="footer__item">Ubicación<br /></label>
                <span id="footer__span">!Puedes encontrarnos aqui!</span>
                <div id="footer__map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.9195423513797!2d-98.2600004854411!3d18.979160387143562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfb9aea1ae4861%3A0x9bc7dd9dd985e584!2sLach%20Films!5e0!3m2!1ses!2smx!4v1625102062417!5m2!1ses!2smx"
                        width="100% "
                        height="auto"
                        style="border: none; border-radius: 3px"
                        allowfullscreen=""
                        loading="fast"
                    ></iframe>
                </div>
            </div>
            <div class="footer__item" id="f-s">
                <label for="footer__item" id="about-us">¿Quienes somos?</label
                ><br />
                <div class="about-us">
                    <p>
                        LACH FILMS es una productora enfocada a la realización
                        de proyectos fotográficos y audiovisuales, la cual
                        cuenta con la capacidad y experiencia de nuestros
                        productores y directores.
                    </p>
                </div>
                <label for="footer__item">Follow Us</label>
                <div class="social-media">
                    <a target="_blank" href="#"
                        ><img
                            src="images/icons/whatsapp.png"
                            alt="icono de whatsapp"
                    /></a>
                    <a target="_blank" href="#"
                        ><img
                            src="images/icons/facebook.png"
                            alt="icono de facebook"
                    /></a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCV2mYmmNksyvRG295p3IcRg/featured"
                        ><img
                            src="images/icons/youtube.png"
                            alt="icono de youtube"
                    /></a>
                    <a target="_blank" href="https://www.instagram.com/lachfilms/"
                        ><img
                            src="images/icons/instagram.png"
                            alt="icono de instagram"
                    /></a>
                </div>
            </div>
            <div class="footer__item" id="f-f">
                <label for="footer__item">Escribenos!</label> <br />
                <span id="footer__span">Puedes cotizar $ precios $</span>
                <!-- FORMULARIO DEL FOOTER -->
                <div>
                    <form action="form.php" method="POST">
                        <div class="formulario">
                            <input
                                type="text"
                                class="question"
                                name="name"
                                id="name"
                                required
                                autocomplete="off"
                            />
                            <label for="name"
                                ><span>Escribe tu nombre!</span></label
                            >

                            <input
                                type="email"
                                class="question"
                                name="email"
                                id="email"
                                required
                                autocomplete="off"
                            />
                            <label for="email"><span>Email</span></label>

                            <textarea
                                name="message"
                                class="question"
                                id="msg"
                                rows="2"
                                required
                                autocomplete="off"
                            ></textarea>
                            <label for="msg"
                                ><span>¿En que te podemos ayudar?</span></label
                            >
                            <button id="form-submit" type="submit">Enviar</button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </footer>
        <div id="create">
            <label for="create"> Digital, Create-It.</label>
        </div>

        <!-- SCRIPTS JS DE ANIMACIONES -->
        <script src="./index.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    </body>
</html>