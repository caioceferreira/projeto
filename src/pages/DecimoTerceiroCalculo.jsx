import React, { useState } from "react";
import '../styles/style.css'

const DecimoTerceiroCalculo = () => {
    
    const [salario, setSalario]= useState('');
    const [result, setResult]= useState(null);
    const [dependentes, setDependentes]= useState(0);
    const [mesesTrabalhados, setMesesTrabalhados]= useState('');
    const [parcelas, setParcelas]= useState(1);

    const handleSalarioChanged = (event) =>{setSalario(event.target.value)};
    const handleMesesTrabalhadosChanged = (event) =>{setMesesTrabalhados(event.target.value)};
    const handleParcelasChanged = (event) => {setParcelas(event.target.value)};
    const handleDependentesChanged = (event) => {setDependentes(event.target.value)};
 
    const callAPI = async () => {
        try {
            const response = await fetch("https://caminho", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    salario: salario,
                    dependentes: dependentes,
                    mesesTrabalhados:mesesTrabalhados,
                    parcelas: parcelas,
                }),
            });
          
            if (!response.ok) {
                throw new Error('Erro ao se comunicar com servidor,');
            }
    
            const data = await response.json();
            setResult(data.resultado);
        }  
        catch (error) {
            console.error('erro ao calcular', error)
        };
    
    
    };


  
    return (

        <div className="container">
            <div className="grid">
                <div className="item">
                    <label htmlFor="salario">Salário Bruto</label>
                    <input type="number" name="salario" id="salario" value={salario} onChange={handleSalarioChanged} color="white"/>
                </div>
                <div className="input-group">
                    <label htmlFor="dependentes">Quantidade de dependentes</label>
                    <input type="number" name="dependentes" id="dependentes" value={dependentes} onChange={handleDependentesChanged}/>
                </div>
                <div className="item">
                    <label htmlFor="parcelas">Quantidade de Parcelas</label>
                    <input type="number" name="parcelas" id="parcelas" value={parcelas} onChange={handleParcelasChanged}/>
                </div>
                <div className="item">
                    <label htmlFor="mesesTrabalhados">Meses Trabalhados</label>
                    <input type="number" name="mesesTrabalhados" id="mesesTrabalhados" value={mesesTrabalhados} onChange={handleMesesTrabalhadosChanged}/>
             </div>
                <button type="button" name="resultado" onClick={callAPI}>{result}</button>
            </div>
        </div>

    );
};

export default DecimoTerceiroCalculo;