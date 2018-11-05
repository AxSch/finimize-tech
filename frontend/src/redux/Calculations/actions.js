import actionTypes from './actionTypes';

const setSavingsAmount = (savingsAmount) => ({
  type: actionTypes.SET_SAVINGS_AMOUNT,
  payload: {
    savingsAmount,
  }
});

const setInterestRate = (interestRate) => ({
  type: actionTypes.SET_INTEREST_RATE,
  payload: {
    interestRate,
  }
});

const setMonthlyAmount = (monthlyAmount) => ({
  type: actionTypes.SET_MONTHLY_SAVE_AMOUNT,
  payload: {
    monthlyAmount,
  }
});

const setFrequency = (frequency) => ({
  type: actionTypes.SET_FREQUENCY,
  payload: {
    frequency,
  }
});

const calculateSavingsSuccess = (graph_results, result) => ({
  type: actionTypes.CALCULATE_AMOUNT_SUCCESS,
  payload: {
    graph_results,
    result
  }
});

const calculateSavingsFailure = (error) => ({
  type: actionTypes.CALCULATE_AMOUNT_FAILURE,
  payload: {
    error
  }
});

const calculationsActions = {
  setSavingsAmount,
  setInterestRate,
  setMonthlyAmount,
  setFrequency,
  calculateSavingsSuccess,
  calculateSavingsFailure
}

export default calculationsActions;
