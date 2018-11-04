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

const calculationsDispatchers = {
  savingsDispatcher,
  interestRateDispatcher
};

export default calculationsDispatchers;

