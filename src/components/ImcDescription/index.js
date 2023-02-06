import React from 'react';

import './styles.css';
export default function ImcDescription() {
  return (
    <section className="description">
      <h1>IMC</h1>
      <p className="p_description">
        O Índice de Massa Corporal (IMC) é o meio utilizado para calcular o peso
        ideal de uma pessoa.
      </p>
      <p className="p_description">
        Para esse cálculo basta dividir o peso, em kg, pela altura ao quadrado,
        em m. Ou seja: IMC = peso / (altura x altura).
      </p>
    </section>
  );
}
