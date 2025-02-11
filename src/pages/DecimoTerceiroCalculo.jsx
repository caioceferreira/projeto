import React, { useState } from "react";
import '../styles/style.css'

const DecimoTerceiroCalculo = () => {
    
    const [salario, setSalario] = useState('');
    const [result, setResult] = useState(null);
    const [dependentes, setDependentes] = useState(0);
    const [mesesTrabalhados, setMesesTrabalhados] = useState('');
    const [parcelas, setParcelas] = useState(1);

    const handleSalarioChanged = (event) => setSalario(event.target.value);
    const handleMesesTrabalhadosChanged = (event) => setMesesTrabalhados(event.target.value);
    const handleParcelasChanged = (event) => setParcelas(event.target.value);
    const handleDependentesChanged = (event) => setDependentes(event.target.value);

    const calcularDecimoTerceiro = () => {
        if (!salario || !mesesTrabalhados || mesesTrabalhados > 12 || mesesTrabalhados < 1) {
            setResult("Valores inválidos!");
            return;
        }

        const salarioBruto = parseFloat(salario);
        const meses = parseInt(mesesTrabalhados);
        const parcelasQtd = parseInt(parcelas) || 1;

        const decimoTerceiro = (salarioBruto * meses) / 12;
        const valorPorParcela = decimoTerceiro / parcelasQtd;

        setResult(`R$ ${valorPorParcela.toFixed(2)} por parcela`);
    };

    return (
        <div className="container">
            <div className="grid">
                <div className="item">
                    <label htmlFor="salario">Salário Bruto</label>
                    <input type="number" name="salario" id="salario" value={salario} onChange={handleSalarioChanged} />
                </div>
                <div className="input-group">
                    <label htmlFor="dependentes">Quantidade de dependentes</label>
                    <input type="number" name="dependentes" id="dependentes" value={dependentes} onChange={handleDependentesChanged} />
                </div>
                <div className="item">
                    <label htmlFor="parcelas">Quantidade de Parcelas</label>
                    <input type="number" name="parcelas" id="parcelas" value={parcelas} onChange={handleParcelasChanged} />
                </div>
                <div className="item">
                    <label htmlFor="mesesTrabalhados">Meses Trabalhados</label>
                    <input type="number" name="mesesTrabalhados" id="mesesTrabalhados" value={mesesTrabalhados} onChange={handleMesesTrabalhadosChanged} />
                </div>
                <button type="button" name="resultado" onClick={calcularDecimoTerceiro}>
                    Calcular
                </button>
                {result && <div className="resultado">Resultado: {result}</div>}
            </div>
        </div>
    );
};

export default DecimoTerceiroCalculo;
