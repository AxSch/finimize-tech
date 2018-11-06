import React, { PureComponent } from "react";
import CurrencyInput from "./CurrencyInput";
import SliderInput from "./SliderInput";
import DisplayGraph from "./DisplayGraph";
import InterestFreqInput from "./InterestFreqInput";
import PropTypes from "prop-types";
import "./InputGraphSection.css";

class InputGraphSection extends PureComponent {
  componentDidUpdate(prevProps){
    const { calculations, calculateSavings } = this.props;
    if (calculations.initialSavings !== prevProps.calculations.initialSavings||
        calculations.interestRate !== prevProps.calculations.interestRate||
        calculations.monthlySaveAmount !== prevProps.calculations.monthlySaveAmount||
        calculations.interestFreq !== prevProps.calculations.interestFreq ) {
          calculateSavings(calculations.initialSavings, calculations.monthlySaveAmount, calculations.interestRate, calculations.interestFreq)
    }
  }
  render() {
    const { setInterestRate, setMonthlyAmount, setSavingsAmount, calculations, setFrequency } = this.props
    const dummyGraphData = [
      {
        month: 1,
        amount: 500
      },
      {
        month: 2,
        amount: 700
      },
      {
        month: 3,
        amount: 1000
      },
      {
        month: 4,
        amount: 1500
      }
    ];

    return (
      <div>
        <div className="financial-inputs">
          <p className="input-label">How much have you saved?</p>
          <CurrencyInput defaultValue={0} setSavingsAmount={setSavingsAmount} setMonthlyAmount={setMonthlyAmount} inputLabel={"Savings"}/>

          <p className="input-label">How much will you save each month?</p>
          <CurrencyInput defaultValue={0} setMonthlyAmount={setMonthlyAmount} setSavingsAmount={setSavingsAmount} inputLabel={"Monthly"}/>

          <p className="input-label">
            How much interest will you earn per year?
          </p>
          <SliderInput defaultValue={0} setInterestRate={setInterestRate}/>
          <p className="input-label">
            Please set the timeframe for the interest to be applied:
          </p>
          <InterestFreqInput setFrequency={setFrequency}/>
        </div>
        <div className="calculation-result">
          <h3>Savings after 50 years:</h3>
          <p>{calculations.result}</p>
        </div>
        <div className="financial-display">
          {/*We have included some sample data here, you will need to replace this
            with your own. Feel free to change the data structure if you wish.*/}
          <DisplayGraph
            data={calculations.graph_results !== undefined ? calculations.graph_results :dummyGraphData}
          />
        </div>
      </div>
    )
  }
}

InputGraphSection.propTypes = {
  setInterestRate: PropTypes.func,
  setMonthlyAmount: PropTypes.func,
  setSavingsAmount: PropTypes.func,
  calculateSavings: PropTypes.func,
  calculations: PropTypes.object
}


export default InputGraphSection;
