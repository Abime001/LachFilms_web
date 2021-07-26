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
        <meta name="keywords" content="Lach, Films, productora, fotografia, contenido, videos, redes sociales">
        <meta name="copyright" content="Create-It">
        <title>Nosotros | Lach Films</title>
        <!-- de 32px shortcut icon -->
        <link rel="shortcut icon" href="../images/icons/lach_logo.ico">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"/>
        <link rel="stylesheet" href="../CSS/normalize.css" />
        <link rel="stylesheet" href="../CSS/styles.css" />
        <link rel="stylesheet" href="../CSS/responsive.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    </head>
    <body>
        <!-- NAV -->
        <nav>
            <ul class="menu" id="menu">
                <li class="logo">
                    <a href="#menu"
                        ><img
                            src="../images/lach_logo.png"
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
        <!-- <div id="home" class="video">
            <video autoplay muted loop width="100%" title="Lach Films video de bienvenida"> 
                <source src="../video/logo_animado.mp4" />
            </video>
        </div> -->
        <div id="img-cover">
            <img src="../images/cover.JPG" alt="cupula-lach-nosotros">
        </div>
        <div class="us-texto">
            <div id="nosotros-titulo" style="font-family: Georgia, 'Times New Roman', Times, serif;">
                <h2>Nosotros</h2>
            </div>
            <div id="nosotros-texto">
                <h1><a href="https://www.lachfilms.com/"><b>LACH FILMS</b></a> es un grupo de personas dedicas a la fotografía y a las soluciones audiovisuales</h1>
            </div>
        </div>

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
                            src="../images/icons/whatsapp.png"
                            title="Whatsapp de Lach Films"
                    /></a>
                    <a target="_blank" href="https://www.facebook.com/lachfilms"
                        ><img
                            src="../images/icons/facebook.png"
                            title="Facebook de LachFilms"
                    /></a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCV2mYmmNksyvRG295p3IcRg/featured"
                        ><img
                            src="../images/icons/youtube.png"
                            title="Canal de YouTube de Lach Films"
                    /></a>
                    <a target="_blank" href="https://www.instagram.com/lachfilms/"
                        ><img
                            src="../images/icons/instagram.png"
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
        <script src="./JS/main.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>
            AOS.init();
        </script>
    </body>
</html>