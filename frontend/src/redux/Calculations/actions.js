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

const calculateSavings = (savingsAmount, monthlyAmount, interestRate) => ({
  type: actionTypes.CALCULATE_AMOUNT_SUCCESS,
  payload: {
    savingsAmount,
    monthlyAmount,
    interestRate
  }
});

const calculationsActions = {
  setSavingsAmount,
  setInterestRate,
  setMonthlyAmount,
  calculateSavings,
}

export default calculationsActions;
