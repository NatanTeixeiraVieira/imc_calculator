import React from 'react';

export default function ImcTableRows({ className, classification, imc }) {
  return (
    <tr className={className}>
      <td>{classification}</td>
      <td>{imc}</td>
    </tr>
  );
}
