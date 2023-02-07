import React from 'react';

import ImcTableRows from '../ImcTableRows/index';
import './styles.css';
export default function index() {
  return (
    <section>
      <h2 className="imc_table-title">Interpretação do IMC</h2>
      <table className="imc_table">
        <thead>
          <tr>
            <th>Classificação</th>
            <th>IMC</th>
          </tr>
        </thead>
        <tbody>
          <ImcTableRows classification="Magreza" imc="Menor que 18,5" />
          <ImcTableRows classification="Normal" imc="Entre 18,5 e 24,9" />
          <ImcTableRows classification="Sobrepeso" imc="Entre 25 e 29,9" />
          <ImcTableRows
            classification="Obesidade grau I"
            imc="Entre 30 e 34,9"
          />
          <ImcTableRows
            classification="Obesidade grau II"
            imc="Entre 35 e 39,9"
          />
          <ImcTableRows
            classification="Obesidade grau III"
            imc="Maior do que 40"
          />
        </tbody>
      </table>
    </section>
  );
}
