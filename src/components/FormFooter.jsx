import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const FormFooter = () => {
    
    const [form, setForm] = useState({
        name: '',
        message: '',
        email: ''
    });

    const handleChange = e =>{
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = e =>{
        e.preventDefault();

        const templateID = 'template_gn6rdmr';

        sendFeedback(templateID, {
            message: form.message,
            name: form.name,
            email: form.email
        });

        setForm({name: '', message: '', email:''})
    };

    useEffect(()=>{
        emailjs.init("user_4MbikDgc6ttbRRAxo59aq");
    },[]);

    const sendFeedback = (templateID, variables)=>{
        emailjs.send('service_65aibkp', templateID, variables)
        .then(res =>{
            console.log('Succefull', res);
        })
        .catch(err =>{
            console.log(err, 'No se envio tu correo');
        });
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="formulario">
                    <input
                        type="text"
                        className="question"
                        name="name"
                        onChange={handleChange}
                        id="name"
                        required
                        autoComplete="off"
                    />
                    <label htmlFor="name">
                        <span>Escribe tu nombre!</span>
                    </label>

                    <input
                        type="email"
                        className="question"
                        name="email"
                        onChange={handleChange}
                        id="emailTitle"
                        required
                        autoComplete="off"
                    />
                    <label htmlFor="email">
                        <span>Email</span>
                    </label>

                    <textarea
                        name="message"
                        onChange={handleChange}
                        className="question"
                        id="msg"
                        rows="2"
                        required
                        autoComplete="off"></textarea>
                    <label htmlFor="msg">
                        <span>¿En que te podemos ayudar?</span>
                    </label>
                    <button id="form-submit" type="submit" title="Enviar">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormFooter;
