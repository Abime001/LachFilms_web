<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 user-scalable=no, maximun-scale=1.0, minimum-scalable=1.0"
        />
        <meta name="description" content="LachFilms, es una productora de material fotográfico y audiovisual"> 
        <meta name="author" content="Create-It">
        <meta name="keywords" content="Lach, Films, productora, fotogrfia, contenido, videos, redes sociales">
        <meta name="copyright" content="Create-It">
        <title>Lach Films - Productora fotográfica y audiovisual</title>
        <!-- de 32px shortcut icon -->
        <link rel="shortcut icon" href="images/icons/lach_logo.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"/>
        <link rel="stylesheet" href="CSS/normalize.css" />
        <link rel="stylesheet" href="CSS/styles.css" />
        <link rel="stylesheet" href="CSS/responsive.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    </head>
    <body>
        <!-- NAV -->
        <nav>
            <ul class="menu" id="menu">
                <li class="logo">
                    <a href="#menu"
                        ><img
                            src="images/lach_logo.png"
                            width="50"
                            height="50"
                            alt="Logo de Lach Films, productora fotográfica y audiovisual"
                            title="Logo de Lach Films, productora fotográfica y audiovisual"
                    /></a>
                </li>
                <li class="item"><a href="#home">Home</a></li>
                <li class="item"><a href="#portafolio">Portafolio</a></li>
                <li class="item"><a href="#trav">Travel</a></li>
                <li class="item"><a href="#about-us">Nosotros</a></li>
                <li class="item lach" title="LachFilms"><label>LACH FILMS</label></li>
                <li class="toggle">
                    <a id="btn__menu_nav" href="#"
                        ><i class="fas fa-bars"></i></a>
                </li>
            </ul>
        </nav>
        <button id="go__up" title="Ir arriba"><i class="fas fa-caret-square-up"></i></button>

        <!-- HOME -->
        <div id="home" class="video">
            <video autoplay muted loop width="100%" height="100%" title="Lach Films video de bienvenida"> 
                <source src="video/logo_animado.mp4" />
            </video>
            
        </div>

        <!-- SECCION TRAVEL -->
        

        <div data-aos="fade-up" data-aos-duration="500">
            <section id="travel">
                <video id="trav"
                    src="./video/travel.mp4"
                    autoplay
                    muted
                    loop
                    width="100%"
                    title="Servicios ofertados por Lach Films"
                ></video>
            </section>
        </div>

        <!-- SECCION PORTAFOLIO -->

        <section id="portafolio">
            <h1>LACH FILMS</h1>
            <p id="p-t-1">¡Capturémoslo juntos! </p>
            <div id="p-div-title">
                <p id="p-t-2">Somos una productora enfocada en la realización de <b>proyectos fotográficos y audiovisuales.</b><br> 
                    Contamos con la capacidad y experiencia de nuestros productores y directores. Escuchamos sus necesidades para traducirlas en las <b>soluciones más eficientes y personalizadas</b> para cada producción. Nuestros recursos y soluciones locales e internacionales nos convierten en la combinación perfecta para su proyecto.</p>
            </div>
            <h2>PORTAFOLIO</h2>
            <div class="portafolio-container">
                <div class="d-v d-social">
                    <a href="#social" id="btn-social" class="filtro-social">
                        <div class="info">
                            <h3>SOCIAL</h3>
                            <p class="p-portafolio">
                                No te arrepentirás de vivir la experiencia de una sesión fotografíca profesional. Preserva esos momentos tan emocionantes. Bodas, festivales, fiestas y muchos eventos más.
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
                                <p class="p-portafolio">
                                    ¿Quieres que tus productos se vean perfectos? Ven con nosotros y deja que hagamos la magía que necesitas en tus productos para que sean tan atractivos como puedas imaginarlos. 
                                </p>
                            </div>
                        </a>
                    </div>

                    <div class="d-aereo">
                        <a href="#aereo" id="btn-aereo" class="filtro-aereo">
                            <div class="info">
                                <h3>AEREO</h3>
                                <p class="p-portafolio">
                                    Que mejor que una toma aerea para mostrar todo lo que tu ciudad puede ofrecer. Asombra en tu perfil, eventos o negocio con las mejores tomas areas que LachFilms te puede ofrecer. ¿lo imaginas? Lo podemos hacer.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="d-v d-turismo">
                    <a href="#turismo" id="btn-turismo" class="filtro-turismo">
                        <div class="info">
                            <h3>TURISMO</h3>
                            <p class="p-portafolio">
                                Permite que te acompañemos en tu viaje y deja que capturemos en video o fotografía la experiencia de vivir la cultura del lugar que visites. Tu te encargas de disfrutar y nosotros de enmarcarte. 
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
                <!-- SnapWidget -->
                <script src="https://snapwidget.com/js/snapwidget.js"></script>
                <iframe src="https://snapwidget.com/embed/946900" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden;  width:100%; "></iframe>
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
            <!-- SnapWidget -->
            <script src="https://snapwidget.com/js/snapwidget.js"></script>
                <iframe src="https://snapwidget.com/embed/946900" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden;  width:100%; "></iframe>
                    
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
                    <!-- SnapWidget -->
                <script src="https://snapwidget.com/js/snapwidget.js"></script>
                <iframe src="https://snapwidget.com/embed/946900" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden;  width:100%; "></iframe>
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
                    <!-- SnapWidget -->
                <script src="https://snapwidget.com/js/snapwidget.js"></script>
                <iframe src="https://snapwidget.com/embed/946900" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden;  width:100%; "></iframe>
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
                <label>Ubicación<br /></label>
                <span class="footer__span">!Puedes aqui!</span><br>
                <iframe id="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.9195423513797!2d-98.2600004854411!3d18.979160387143562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfb9aea1ae4861%3A0x9bc7dd9dd985e584!2sLach%20Films!5e0!3m2!1ses!2smx!4v1625102062417!5m2!1ses!2smx"
                    style="border: none; border-radius: 3px"
                    allowfullscreen
                    title="Ubicación de Lach Films, en google maps"
                ></iframe>
            </div>
            <div class="footer__item" id="f-s">
                <label id="about-us">¿Quienes somos?</label
                ><br />
                <div class="about-us">
                    <p>
                        LACH FILMS es una productora enfocada a la realización
                        de proyectos fotográficos y audiovisuales, la cual
                        cuenta con la capacidad y experiencia de nuestros
                        productores y directores.
                    </p>
                </div>
                <label>Follow Us</label>
                <div class="social-media">
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=2212209419"
                        ><img
                            src="images/icons/whatsapp.png"
                            title="Whatsapp de Lach Films"
                    /></a>
                    <a target="_blank" href="https://www.facebook.com/lachfilms"
                        ><img
                            src="images/icons/facebook.png"
                            title="Facebook de LachFilms"
                    /></a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCV2mYmmNksyvRG295p3IcRg/featured"
                        ><img
                            src="images/icons/youtube.png"
                            title="Canal de YouTube de Lach Films"
                    /></a>
                    <a target="_blank" href="https://www.instagram.com/lachfilms/"
                        ><img
                            src="images/icons/instagram.png"
                            title="Instagram de Lach Films"
                    /></a>
                </div>
            </div>
            <div class="footer__item" id="f-f">
                <label>Escribenos!</label> <br />
                <span class="footer__span">Puedes cotizar $ precios $</span>
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
                            <button id="form-submit" type="submit" title="Enviar">Enviar</button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </footer>
        <div id="create">
            <label> Digital, Create-It.</label>
        </div>

        <!-- SCRIPTS JS DE ANIMACIONES -->
        <script src="./main.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>
            AOS.init();
        </script>
    </body>
</html>