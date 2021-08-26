import React from 'react';
import turismoImg1 from '../images/pagina_turismo/t-img-1.jpg';
import turismoImg2 from '../images/pagina_turismo/t-img-2.jpg';
import turismoImg3 from '../images/pagina_turismo/t-img-3.jpg';
import turismoImg4 from '../images/pagina_turismo/t-img-4.jpg';
import turismoImg5 from '../images/pagina_turismo/t-img-5.jpg';
import turismoImg6 from '../images/pagina_turismo/t-img-6.jpg';
import Mosaico from '../components/Mosaico';
import DivCreate from '../components/DivCreate';
import IconBack from '../components/IconBack';
import {Link} from 'react-router-dom';

const Turismo = ()=>{
    return(
        <>
            <div className="load-container">
            <div className="loading-screen"></div>
        </div>
        
        <main data-barba="container" data-barba-namespace="about-section">
            <div className="header">
                <IconBack/>
                <div className="container-img">
                    <h2>TURISMO</h2>
                    <span>
                        Deja que vayamos contigo y capturemos los mejores momentos. <br/> 
                        En esta sección encontrarás algunas imágenes de nuestro trabajo. <br/> 
                        ¿Tienes un evento familiar, vas a salir de vacaciones, necesitas un albúm de tu aventura por la república? <br/> 
                        en <Link to="/">LachFilms</Link> nos gusta complacer a nuestros clientes, por eso <br/>
                         ofrecemos este servicio de turismo. ¿tienes alguna duda?
                        <a href="https://www.lachfilms.com/#about-us">¡Escríbenos!</a>
                        <br/>
                        <a href="../descargas/img_turismo.rar" download="lachfilm - pack turismo.rar"><p id="anuncio"><i>Puedes descargar nuestras imágenes totalmente gratis</i></p></a>
                    </span>
                    <hr />
                    <Mosaico
                        img1={turismoImg1}
                        img2={turismoImg2}
                        img3={turismoImg3}
                        img4={turismoImg4}
                        img5={turismoImg5}
                        img6={turismoImg6}
                    />           
                </div>
            </div>
            <DivCreate/>
        </main>
    </>
    )
};

export default Turismo;