import React, { Component } from "react"
import InputGraphSectionContainer from './Components/Containers/InputGraphSection'
import "./App.css"
import PropTypes from "prop-types"

class App extends Component {

	componentDidMount() {
		const { calculateSavings } = this.props;
		calculateSavings(1001, 100, 1.30, 1);
	}

	render() {
		const { calculations } = this.props;
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Finimize dev challenge</h1>
				</header>
                    {calculations.loading === true ?
                        'Loading...'
                    :
					 	<InputGraphSectionContainer calculations={calculations}/>
                    }
			</div>
		)
	}
}

App.propTypes = {
	calculateSavings: PropTypes.func,
	calculations: PropTypes.object
  }

export default App
