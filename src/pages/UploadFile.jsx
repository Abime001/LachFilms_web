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
                <label>Registra el código y el link de descarga</label>
                <form action="" method="post">
                    <input
                        onChange={handleChange}
                        className="input-code"
                        id="ic-code"
                        name="codigo"
                        type="text"
                        placeholder="Ingresa Código"
                        pattern="LF+-+[0-9]*"
                        title="LF-..."
                    />
                    <input
                        onChange={handleChange}
                        className="input-code"
                        id="ic-url"
                        type="text"
                        name="link"
                        placeholder="Ingresa Link"
                        pattern="LF+-+[0-9]*"
                        title="LF-..."
                    />
                    {controlers.empty? <script>function myFunction() {
                        alert("Debes de llenar todos los datos")
                    }</script>: null}
                    {/* <p>{controlers.empty? 'El campo esta vacio': null}</p> */}
                    <button type="submit" onClick={handleSubmit}>
                        Subir link
                    </button>
                    {controlers.schow ? <p>{dato.codigo}</p>: null}
                </form>
                <div id="label-del">
                    <label  htmlFor="">Borrar código y archivo</label><br />
                    <input className="input-code" id="ic-del" type="text" onChange={changeDelete} placeholder="Digite el código a borrar"/>
                    <button onClick={handleDelete}>Borrar</button>
                </div>
                <div>
                    {datos.map( d => 
                        <p key={d.id} id="datos-map">{d.codigo}</p>    
                    )}
                </div>
            </div>
        </div>
    );
};

export default UploadFile;
