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
            const res = await axios.get("http://localhost:3000/data");
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
        <div className="">
            <label>¡¡Descarga tus IMG/VIDEOS!!</label>
            <input
                type="text"
                onChange={handleChange}
                placeholder="Ingresa tú código cliente"
            />
            {download.status ? <a href={download.link} target="_blank">Descargar</a> : null}
        </div>
    );
};

export default LinksFooter;
