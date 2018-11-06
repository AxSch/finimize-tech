import React from 'react';
import Enzyme from 'enzyme';
import InputGraphSection from '../InputGraphSection';


const mockCalculations = {
   initialSavings: 100,
   interestFreq: 4,
   interestRate: 0,
   monthlySaveAmount: 340,
   result: 8000.00,
   error: 0,
   graph_results: []
}

it('renders without crashing', () => {
  Enzyme.shallow(
    <InputGraphSection
      calculations={mockCalculations}
    />,
  );
});

it('renders the result', () => {
  const instance = Enzyme.shallow(
    <InputGraphSection
      calculations={mockCalculations}
    />,
  );
  expect(instance.find('.calculation-result').find('p')).toHaveLength(1);
});