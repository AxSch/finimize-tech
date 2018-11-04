import actionTypes from "./actionTypes";

const initialState = {
  initialSavings: undefined,
  interestRate: 0.0,
  monthlySaveAmount: undefined,
  errors: {
    initialSavingsError: undefined,
    interestRateError: undefined,
    monthlySaveAmountError: undefined
  }
}

const calculationsReducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_SAVINGS_AMOUNT:
      return {
        ...state,
        initialSavings: action.payload.initialSavings
      }
    case actionTypes.SET_INTEREST_RATE:
      return {
        ...state,
        interestRate: action.payload.interestRate
      }
    case actionTypes.SET_MONTHLY_SAVE_AMOUNT:
      return {
        ...state,
        monthlySaveAmount: action.payload.monthlySaveAmount
      }
    default:
      return state;
  }
}

export {
  initialState,
  calculationsReducer
}