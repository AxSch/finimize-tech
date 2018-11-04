import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InterestFreqInput extends Component {
  constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this);
  }
  
	handleChange(value) {
		this.props.setFrequency(value);
	}

	render() {
		return (
			<div>
          <input 
              type="radio"
              id="monthly"
              name="InterestFrequency"
              value={12}
              onChange={event => this.handleChange(event.target.value)}
              />
				<label htmlFor="monthly">Monthly</label>
          <input 
            type="radio"
            id="quarterly"
            name="InterestFrequency"
            value={4}
            onChange={event => this.handleChange(event.target.value)}
            />
        <label htmlFor="quarterly">Quarterly</label>
        <input 
            type="radio"
            id="annually"
            name="InterestFrequency"
            value={1}
            onChange={event => this.handleChange(event.target.value)}
            />
        <label htmlFor="annually">Annually</label>
			</div>
		)
	}
}

InterestFreqInput.propTypes = {
  setFrequency: PropTypes.func
}
