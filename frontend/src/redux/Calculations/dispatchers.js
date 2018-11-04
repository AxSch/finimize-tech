import calculationsActions from './actions';
// import calculationsService from '../../services/calculationsService';

// const savingsDispatcher = (savingAmount, interestRate, monthlyAmount) => {
//   return dispatch => {
//       calculationsService.calculate(savingAmount,interestRate, monthlyAmount)
//         .then(
//           dispatch(calculationsActions.calculateSavings(savingAmount, interestRate, monthlyAmount))
//         );
//   }
// }

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

const setSavingsAmountDispatcher = (monthlyAmount) => {
  return dispatch => {
    dispatch(calculationsActions.setSavingsAmount(monthlyAmount))
  };
}

// const calculationsDispatchers = {
//   // savingsDispatcher,
//   interestRateDispatcher
// };

export { 
  interestRateDispatcher,
  monthlyAmountDispatcher,
  setSavingsAmountDispatcher
};

