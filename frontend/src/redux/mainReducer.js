import { combineReducers } from 'redux';
import { calculationsReducer } from './Calculations/reducer';

const appReducer = combineReducers({
  calculations: calculationsReducer
})

export default appReducer;
