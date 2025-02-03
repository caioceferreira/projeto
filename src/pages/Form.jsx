import React, { useState} from "react";

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChanged = (event) => {
        setName(event.target.value);
    } ;

    const handleEmailChanged = (event) => {
        setEmail(event.target.value);
    };


    return (
        <div>
            <h1>Formulário</h1>
    
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" id="name" value={name} onChange={handleNameChanged}/>
            </div>
            <div>
            <label htmlFor="email">Email: </label>
                <input type="text" id="email" value={email} onChange={handleEmailChanged}/>
            </div>
    
            <div>
                <h2>Dados Inseridos: </h2>
                <p><strong>Nome: </strong>{name}</p>
                <p><strong>Email: </strong>{email}</p>
            </div>
        </div>
    );

};

export default Form;



