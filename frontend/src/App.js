import React, { Component } from "react"
import { calculate } from "./API"
import InputGraphSectionContainer from './Components/Containers/InputGraphSection'
import "./App.css"

class App extends Component {
	state = {
		loading: true,
		result: null
	}

	componentDidMount() {
		calculate(1000, 1)
			.then(r => this.setState({
            	loading: false,
                result: r.data.result
			}))
	}

	render() {
	    const {loading, result} = this.state

		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Finimize dev challenge</h1>
				</header>
                    {loading ?
                        'Loading...'
                    :
					 	<InputGraphSectionContainer {...{result}}/>
                    }
			</div>
		)
	}
}

export default App
