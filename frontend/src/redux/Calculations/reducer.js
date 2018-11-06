import actionTypes from "./actionTypes";

const initialState = {
  initialSavings: undefined,
  interestRate: 0.0,
  monthlySaveAmount: undefined,
  interestFreq: undefined,
  graph_results: undefined,
  error: undefined,
  loading: true
}

const calculationsReducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_SAVINGS_AMOUNT:
      return {
        ...state,
        initialSavings: action.payload.savingsAmount
      }
    case actionTypes.SET_INTEREST_RATE:
      return {
        ...state,
        interestRate: action.payload.interestRate
      }
    case actionTypes.SET_FREQUENCY:
      return {
        ...state,
        interestFreq: action.payload.frequency
      }
    case actionTypes.SET_MONTHLY_SAVE_AMOUNT:
      return {
        ...state,
        monthlySaveAmount: action.payload.monthlyAmount
      }
    case actionTypes.CALCULATE_AMOUNT_SUCCESS:
      return {
        ...state,
        graph_results: action.payload.graph_results,
        result: action.payload.result,
        error: null,
        loading: false
      }
    case actionTypes.CALCULATE_AMOUNT_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state;
  }
}

export {
  initialState,
  calculationsReducer
}