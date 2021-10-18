import React, { useEffect, useState } from "react";
import axios from "axios";

const LinksFooter = () => {
    const [datos, setDatos] = useState([]);
    const [download, setDownload] = useState({
        status: false,
        link: "",
    });

    useEffect(() => {
        (async () => {
            const res = await axios.get("https://lachfilms-api.herokuapp.com/api/codigo");
            setDatos(res.data);
        })();
    }, []);

    const handleChange = (e) => {
        datos.find((d) =>
            d.codigo === e.target.value
                ? setDownload({ ...download, status: true, link: d.link })
                : setDownload({ ...download, status: false, link: "" })
        );
    };
    return (
        <div className="davs">
            <label id="label-down">CANJEA TU CÓDIGO DE CLIENTE PARA PODER DESCARGAR TU SET</label>
            <input
                className="input-code"
                id="ic-down"
                type="text"
                onChange={handleChange}
                placeholder="Ingresa tu código cliente"
            />
            
            {download.status ? <a id="a-download" href={download.link} target="_blank">¡Presiona aquí para descargar tu set!</a> : null}
        </div>
    );
};

export default LinksFooter;
