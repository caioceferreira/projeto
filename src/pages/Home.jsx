import React from "react";

const Home = () => {
    return (
        <div>
            <h1>Hello World!</h1> 
            <p>Está é minha primeira página!</p>       
            <Alttext/>
        </div>
       
    );
};



const Alttext = () => {
        return (
            <div>
                Teste, sou o objeto de baixo
            </div>
        );
};

export default Home;