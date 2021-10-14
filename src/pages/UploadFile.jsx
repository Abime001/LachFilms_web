import React, { useEffect, useState } from "react";
import axios from "axios";

const UploadFile = () => {
    const [datos, setDatos] = useState([]);
    const [dato, setDato] = useState({
        codigo: "",
        link: "",
    });
    const [datDele, setDatDele] = useState('');
    const [controlers, setControlers] = useState({
        empty: false,
        schow: false
    });

    useEffect(() => {
        (async () => {
            const res = await axios.get("http://localhost:3000/data");
            setDatos(res.data);
        })();
    }, []);

    const handleChange = (e) => {
        setDato({ ...dato, [e.target.name]: e.target.value });
        setControlers({...controlers, empty: false});
    };
    
    const changeDelete = e => setDatDele(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (dato.link !== "" && dato.codigo !== "") {
            (async ()=>{
                const res = await axios.post("http://localhost:3000/data", dato);
                console.log(res);
            })();
        } else {
            setControlers({...controlers, empty: true});
        }
    };

    const handleDelete = ()=>{
        const del = datos.find( d => d.codigo === datDele ? d.id : null);
        (async () =>{
            await axios.delete(`http://localhost:3000/data/${del.id}`);
        })();
    };

    return (
        <div className="page-upload">
            <div className="page-upload-label">
                <label>Ingrese el link del archivo</label>
                <form action="" method="post">
                    <input
                        onChange={handleChange}
                        id="input-code"
                        name="codigo"
                        type="text"
                        placeholder="Ingresa el codigo correspondiente"
                        pattern="LF+-+[0-9]*"
                        title="LF-..."
                    />
                    <input
                        onChange={handleChange}
                        id="input-code"
                        type="text"
                        name="link"
                        placeholder="Ingresa el link del archivo"
                        pattern="LF+-+[0-9]*"
                        title="LF-..."
                    />
                    <p>{controlers.empty? 'El campo esta vacio': null}</p>
                    <button type="submit" onClick={handleSubmit}>
                        Subir link
                    </button>
                    {controlers.schow ? <p>{dato.codigo}</p>: null}
                </form>
                <div>
                    <label htmlFor="">Borrar código y archivo</label>
                    <input type="text" onChange={changeDelete} placeholder="Digite el código a borrar"/>
                    <button onClick={handleDelete}>Borrar</button>
                </div>
                <div>
                    {datos.map( d => 
                        <p key={d.id}>{d.codigo}</p>    
                    )}
                </div>
            </div>
        </div>
    );
};

export default UploadFile;
