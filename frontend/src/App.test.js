import React from 'react';
import App from './App';
import Enzyme from 'enzyme';

it('renders without crashing', () => {
  Enzyme.shallow(
    <App
      calculateSavings={() => {}}
      calculations={{}}
    />,
  );
});
