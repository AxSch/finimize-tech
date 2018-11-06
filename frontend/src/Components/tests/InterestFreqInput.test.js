import React from 'react';
import Enzyme from 'enzyme';
import InterestFreqInput from '../InterestFreqInput';

it('renders without crashing', () => {
  Enzyme.shallow(
    <InterestFreqInput
      setFrequency={() => {}}
    />,
  );
});

describe('onChange function', () => {
  const mockFn = jest.fn();
  let value;

  it('Monthly - setFrequency is called', () => {
    value = 12
    const instance = Enzyme.shallow(
      <InterestFreqInput
        setFrequency={mockFn}
      />,
    );
    expect(instance.find('#monthly').prop('value')).toEqual(value);

    instance.find('#monthly').simulate('change', {
      target: { value },
    });

    expect(mockFn).toHaveBeenCalledWith(value);
  });

  it('Quarterly - setFrequency is called', () => {
    value = 4
    const instance = Enzyme.shallow(
      <InterestFreqInput
        setFrequency={mockFn}
      />,
    );
    expect(instance.find('#quarterly').prop('value')).toEqual(value);

    instance.find('#quarterly').simulate('change', {
      target: { value },
    });

    expect(mockFn).toHaveBeenCalledWith(value);
  });

  it('Annually - setFrequency is called', () => {
    value = 1
    const instance = Enzyme.shallow(
      <InterestFreqInput
        setFrequency={mockFn}
      />,
    );
    expect(instance.find('#annually').prop('value')).toEqual(value);

    instance.find('#annually').simulate('change', {
      target: { value },
    });

    expect(mockFn).toHaveBeenCalledWith(value);
  });
})