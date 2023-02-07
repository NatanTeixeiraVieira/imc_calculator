import React from 'react';

import ImcDescription from '../components/ImcDescription/index';
import ImcCalculator from '../components/ImcCalculator/index';
import ImcTable from '../components/ImcTable/index';
export default function ImcCalculate() {
  return (
    <>
      <ImcDescription />
      <ImcCalculator />
      <ImcTable />
    </>
  );
}
