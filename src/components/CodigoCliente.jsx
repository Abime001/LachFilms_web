import React, { useState } from "react";

const CodigoCliente = () => {
    const [input, setInput] = useState("");
    const [link, setLink] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    };

    return (
        <>
            <a href="ftp://digital%2540lachfilms.com@ftp.create-it.com.mx/00001.rar" download>Des</a>
            <p>¡¡Descarga tus viedos/imagenes!!</p>
            <input
                onChange={handleChange}
                type="text"
                placeholder="Introduce tu código cliente"
            />
            { input === "B0001" ? <a className="link-cliente" href={B0001} download>Descargar archivo</a>
            : input === "B0002" ? <a className="link-cliente" href={B0001} download>Descargar archivo</a> : input === "B0003" ?
            <a className="" href={B0001} download>Descargar archivo</a> : null
            }
        </>
    );
};

export default CodigoCliente;
