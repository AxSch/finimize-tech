import React from 'react';
import Enzyme from 'enzyme';
import CurrencyInput from '../CurrencyInput';

it('renders without crashing', () => {
  Enzyme.shallow(
    <CurrencyInput
      defaultValue={0}
      setMonthlyAmount={() => {}}
      setSavingsAmount={() => {}}
      inputLabel={"Monthly"}
    />,
  );
});

describe('onChange function', () => {
  const value = 1000
  const mockFn = jest.fn();
  
  it('Monthly - setMonthlyAmount is called', () => {
    const instance = Enzyme.shallow(
      <CurrencyInput
        defaultValue={0}
        setMonthlyAmount={mockFn}
        setSavingsAmount={() => {}}
        inputLabel={"Monthly"}
      />,
    );
    instance.find('input').simulate( 'change', {
      target: { value },
    });
  
    expect(mockFn).toHaveBeenCalledWith(value);
    expect(instance.find('input').prop('value')).toEqual(1000);
  });

  it('Savings - setSavingsAmount is called', () => {
    const instance = Enzyme.shallow(
      <CurrencyInput
        defaultValue={0}
        setMonthlyAmount={() => {}}
        setSavingsAmount={mockFn}
        inputLabel={"Savings"}
      />,
    );
    instance.find('input').simulate( 'change', {
      target: { value },
    });
  
    expect(mockFn).toHaveBeenCalledWith(value);
    expect(instance.find('input').prop('value')).toEqual(1000);
  });
})
