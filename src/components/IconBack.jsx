import React from "react";
import BackICON from '../images/icons/back.svg';
import {Link} from 'react-router-dom';

const IconBack = () => (
    <div class="animate-this btn-back">
        <Link to="/">
            <img
                src={BackICON}
                width="50px"
                alt="Flecha para regresar a la página anterior"
            />
        </Link>
    </div>
);

export default IconBack;
