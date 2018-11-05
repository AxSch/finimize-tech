import calculationsActions from './actions';
import { calculate }  from '../../API';

const interestRateDispatcher = (interestRate) => {
  return dispatch => {
    dispatch(calculationsActions.setInterestRate(interestRate))
  };
}

const monthlyAmountDispatcher = (monthlyAmount) => {
  return dispatch => {
    dispatch(calculationsActions.setMonthlyAmount(monthlyAmount))
  };
}

const setSavingsAmountDispatcher = (savingsAmount) => {
  return dispatch => {
    dispatch(calculationsActions.setSavingsAmount(savingsAmount))
  };
}

const setFrequencyDispatcher = (frequency) => {
  return dispatch => {
    dispatch(calculationsActions.setFrequency(frequency))
  };
}

const calculateSavingsDispatcher = (savingsAmount, monthlyAmount, interestRate, interestFreq) => {
  return dispatch => {
    console.log(savingsAmount, monthlyAmount, interestRate, interestFreq);
    calculate(savingsAmount, monthlyAmount, interestRate, interestFreq)
      .then(
        result => {
          dispatch(calculationsActions.calculateSavingsSuccess(result.data.graph_result, result.data.result));
        },
        error => {
          dispatch(calculationsActions.calculateSavingsFailure(error.response.status));
        }
      );
  };
}

export { 
  interestRateDispatcher,
  monthlyAmountDispatcher,
  setFrequencyDispatcher,
  setSavingsAmountDispatcher,
  calculateSavingsDispatcher
};

