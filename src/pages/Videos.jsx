import React from 'react';
import BackICON from '../images/icons/back.svg';
import {Link} from 'react-router-dom';
import DivCreate from '../components/DivCreate';

const Videos = ()=>(
    <>
        <div class="load-container">
            <div class="loading-screen"></div>
        </div>
        
        <main data-barba="container" data-barba-namespace="about-section">
            <div class="header">
                <div class="animate-this btn-back">
                    <Link to="/">
                        <img src={BackICON} width="50px" alt="Flecha para regresar a la página anterior"/>
                    </Link>
                </div>
                <div class="container-img">
                    <h2>GALERÍA DE VIDEOS</h2>
                    <span>
                        En la galería de videos de <a href="../index.php">LachFilms</a> podrás <br/>
                        encontrar nuestros mejores trabajos, ve nuestra experiencia y todo lo que te podemos ofrecer!
                        <br/>¿Tienes en mente alguna idea? <br/> Nuestros expertos en fotografía y video pueden ayudarte a llevar  
                        <br/> tu idea a la realidad. Deja que volar la creatividad. Incrementa el valor de tu negocio. <br/>
                        <a href="../index.php#about-us">¡Escríbenos!</a>
                    </span>
                    <hr />
                    <div class="container-mosaico">
                        <div class="mosaico-row m-video m">
                            <div class="m-i-1">
                                    <iframe src="https://player.vimeo.com/video/582235772" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div class="m-i-2">
                                <iframe src="https://player.vimeo.com/video/582235772" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

                            </div>
                        </div>
                        <div class="mosaico-row m">
                            <div class="m-item m-i-3">
                                <iframe src="https://player.vimeo.com/video/582235772" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

                            </div>
                            <div class="m-item m-i-4">
                                <iframe src="https://player.vimeo.com/video/582235772" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

                            </div>
                        </div>
                        <div class="mosaico-row m">
                            <div class="m-item m-i-5">
                                <iframe src="https://player.vimeo.com/video/582235772" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

                            </div>
                            <div class="m-item m-i-6">
                                <iframe src="https://player.vimeo.com/video/582235772" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

                            </div>
                        </div>
                    </div> 

                </div>
            </div>
            <DivCreate/>
        </main>
    </>
);

export default Videos;