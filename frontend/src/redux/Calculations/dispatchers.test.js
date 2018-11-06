import actionTypes from './actionTypes';
import {
  interestRateDispatcher,
  monthlyAmountDispatcher,
  setFrequencyDispatcher,
  setSavingsAmountDispatcher,
  calculateSavingsDispatcher } from './dispatchers.js';


  describe('interestRateDispatcher', () => {
    let dispatch;
    const interestRate = 1.0

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should dispatch SET_INTEREST_RATE', () => {
      interestRateDispatcher(interestRate)(dispatch);
      expect(dispatch).toHaveBeenCalledWith({ 
        type: actionTypes.SET_INTEREST_RATE,
        payload: {
          interestRate: 1
        } 
      });
    });
  })

  describe('monthlyAmountDispatcher', () => {
    let dispatch;
    const monthlyAmount = 100

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should dispatch SET_MONTHLY_SAVE_AMOUNT', () => {
      monthlyAmountDispatcher(monthlyAmount)(dispatch);
      expect(dispatch).toHaveBeenCalledWith({ 
        type: actionTypes.SET_MONTHLY_SAVE_AMOUNT,
        payload: {
          monthlyAmount: 100
        } 
      });
    });
  })

  describe('setSavingsAmountDispatcher', () => {
    let dispatch;
    const savingsAmount = 150

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should dispatch SET_SAVINGS_AMOUNT', () => {
      setSavingsAmountDispatcher(savingsAmount)(dispatch);
      expect(dispatch).toHaveBeenCalledWith({ 
        type: actionTypes.SET_SAVINGS_AMOUNT,
        payload: {
          savingsAmount: 150
        } 
      });
    });
  })

  describe('setFrequencyDispatcher', () => {
    let dispatch;
    const annuallyFreq = 1
    const monthlyFreq = 12
    const quarterlyFreq = 4

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should dispatch SET_FREQUENCY - annually', () => {
      setFrequencyDispatcher(annuallyFreq)(dispatch);
      expect(dispatch).toHaveBeenCalledWith({ 
        type: actionTypes.SET_FREQUENCY,
        payload: {
          frequency: 1
        } 
      });
    });

    it('should dispatch SET_FREQUENCY - monthly', () => {
      setFrequencyDispatcher(monthlyFreq)(dispatch);
      expect(dispatch).toHaveBeenCalledWith({ 
        type: actionTypes.SET_FREQUENCY,
        payload: {
          frequency: 12
        } 
      });
    });

    it('should dispatch SET_FREQUENCY - quarterly', () => {
      setFrequencyDispatcher(quarterlyFreq)(dispatch);
      expect(dispatch).toHaveBeenCalledWith({ 
        type: actionTypes.SET_FREQUENCY,
        payload: {
          frequency: 4
        } 
      });
    });
  })

  describe('setSavingsAmountDispatcher', () => {
    let dispatch;
    const savingsAmount = 150

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should dispatch SET_SAVINGS_AMOUNT', () => {
      setSavingsAmountDispatcher(savingsAmount)(dispatch);
      expect(dispatch).toHaveBeenCalledWith({ 
        type: actionTypes.SET_SAVINGS_AMOUNT,
        payload: {
          savingsAmount: 150
        } 
      });
    });
  })

  // describe('calculateSavingsDispatcher', () => {
  //   let dispatch;
  //   const savingsAmount = 150
  //   const monthlyAmount = 100
  //   const interestRate = 1.0
  //   const monthlyFreq = 12
    
  //   beforeEach(() => {
  //     dispatch = jest.fn();
  //   });

  //   it('should dispatch SET_SAVINGS_AMOUNT', () => {
  //     calculateSavingsDispatcher(savingsAmount, monthlyAmount, interestRate, monthlyFreq)(dispatch);
  //     console.log(dispatch.mock)
  //     expect(dispatch).toHaveBeenCalledWith({ 
  //       type: actionTypes.CALCULATE_AMOUNT_SUCCESS,
  //       payload: {
  //         graph_results: [{}],
  //         result: 121
  //       } 
  //     });
  //   });
  // })