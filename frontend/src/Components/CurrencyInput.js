import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './CurrencyInput.css'

export default class CurrencyInput extends Component {
	constructor(props) {
		super(props)

		this.state = {
			hasFocus: false,
			value: props.defaultValue
		}
	}

	handleChange(e) {
		const value = e.target.value
		this.setState({value});
		if (this.props.inputLabel === "Savings") {
			this.props.setSavingsAmount(value);
		} 
		else if (this.props.inputLabel === "Monthly") {
			this.props.setMonthlyAmount(value);
		}
	}

	handleFocus(e) {
		this.setState({
			hasFocus: true
		})
	}

	render() {
		const { defaultValue } = this.props
		const { value } = this.state

		return (
			<div className={`currency-input ${defaultValue !== undefined ? 'default-value' : ''}`}>
				<span>£</span>
				<input type="text"
					value={value}
					onChange={this.handleChange.bind(this)}
					onFocus={this.handleFocus.bind(this)}/>
			</div>
		)
	}
}

CurrencyInput.propTypes = {
	defaultValue: PropTypes.number,
	setMonthlyAmount: PropTypes.func,
	setSavingsAmount: PropTypes.func,
	inputLabel: PropTypes.string,
}
