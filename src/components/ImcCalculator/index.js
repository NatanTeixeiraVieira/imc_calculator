import React, { useState } from 'react';

import './styles.css';

export default function ImcCalculator() {
  const calculateImc = (evt) => {
    evt.preventDefault();
    const conversionCmToM = 100;
    const calculationImc = weight / (heigth / conversionCmToM) ** 2;
    setResultImc(calculationImc.toFixed(2).replace('.', ','));
  };

  const [heigth, setHeigth] = useState(0);
  const [weight, setWeight] = useState(0);
  const [resultImc, setResultImc] = useState('0');

  return (
    <section className="imc_calculator">
      <h2>Calculadora de IMC</h2>
      <form className="imc_calculator-form" onSubmit={calculateImc}>
        <label>
          Altura <br />
          <input
            type="number"
            onChange={(evt) => setHeigth(Number(evt.target.value))}
            placeholder="Ex.: 173"
            min={0}
            max={260}
            required
          />
          <span>cm</span>
        </label>
        <label>
          Peso <br />
          <input
            type="number"
            onChange={(evt) => setWeight(Number(evt.target.value))}
            placeholder="Ex.: 69"
            min={0}
            max={600}
            required
          />
          <span>kg</span>
        </label>
        <button type="submit" className="button_calculate">
          Calcular
        </button>
        <p className="form-result">Resultado: {resultImc}</p>
      </form>
    </section>
  );
}
