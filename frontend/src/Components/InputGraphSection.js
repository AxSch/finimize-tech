import React, { Component } from "react";
import CurrencyInput from "./CurrencyInput";
import SliderInput from "./SliderInput";
import DisplayGraph from "./DisplayGraph";
import PropTypes from "prop-types";
import "./InputGraphSection.css";

class InputGraphSection extends Component {
  render() {
    const { result, setInterestRate, setMonthlyAmount, setSavingsAmount } = this.props

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
          <SliderInput defaultValue={4} setInterestRate={setInterestRate}/>
        </div>
        <div className="financial-display">
          {/*We have included some sample data here, you will need to replace this
            with your own. Feel free to change the data structure if you wish.*/}
          <DisplayGraph
            data={[
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
            ]}
          />
        </div>
      </div>
    )
  }
}

InputGraphSection.propTypes = {
  result: PropTypes.number,
  setInterestRate: PropTypes.func,
  setMonthlyAmount: PropTypes.func,
  setSavingsAmount: PropTypes.func,
  calculations: PropTypes.object
}


export default InputGraphSection;
