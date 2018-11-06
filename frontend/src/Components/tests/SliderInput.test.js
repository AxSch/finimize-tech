import React from 'react';
import Enzyme from 'enzyme';
import SliderInput from '../SliderInput';

it('renders without crashing', () => {
  Enzyme.shallow(
    <SliderInput
      defaultValue={0}
      setInterestRate={() => {}}
    />,
  );
});

it('renders the value', () => {
  const instance = Enzyme.shallow(
    <SliderInput
      defaultValue={0}
      setInterestRate={() => {}}
    />,
  );
  expect(instance.find('p')).toHaveLength(1);
  expect(instance.find('p').text()).toEqual("0%");
});

describe('onChange function', () => {
  const value = 5
  const mockFn = jest.fn();
  
  it('setInterestRate is called', () => {
    const instance = Enzyme.shallow(
      <SliderInput
        defaultValue={0}
        setInterestRate={mockFn}
      />,
    );
    instance.find('input').simulate( 'change', {
      target: { value },
    });
  
    expect(mockFn).toHaveBeenCalledWith(value);
    expect(instance.find('input').prop('value')).toEqual(5);
    expect(instance.find('p').text()).toEqual("5%");
  });
})