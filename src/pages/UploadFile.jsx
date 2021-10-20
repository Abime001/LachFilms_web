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
            const res = await axios.get("https://lachfilms-api.herokuapp.com/api/codigo");
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
                await axios.post("https://lachfilms-api.herokuapp.com/api/codigo", dato);
                window.location.href = '/codigos';
            })();
        } else {
            setControlers({...controlers, empty: true});
        }
    };

    const handleDelete = ()=>{
        const del = datos.find( d => d.codigo === datDele ? d._id : null);
        (async () =>{
            await axios.delete(`https://lachfilms-api.herokuapp.com/api/codigo/${del._id}`);
            window.location.href = '/codigos';
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
                    />
                    <input
                        onChange={handleChange}
                        className="input-code"
                        id="ic-url"
                        type="text"
                        name="link"
                        placeholder="Ingresa Link"
                    />
                    {controlers.empty? <script>function myFunction() {
                        alert("Debes de llenar todos los datos")
                    }</script>: null}
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
            </div>
        </div>
    );
};

export default UploadFile;
