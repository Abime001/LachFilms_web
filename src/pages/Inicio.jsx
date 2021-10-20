import React from "react";
import ButtonUp from "../components/ButtonUp";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Portafolio from "../components/Portafolio";
import Somos from "../components/Somos";
import Travel from "../components/Travel";
import Video_Header from "../components/Video_Header";
import CodigoCliente from '../components/CodigoCliente';

const Inicio = () => (
    <div>
        <ButtonUp/>
        <Nav />
        <Video_Header/>
        <Somos/>
        <Travel/>
        <Portafolio/>
        <CodigoCliente/>
        <Footer/>
    </div>
);

export default Inicio;