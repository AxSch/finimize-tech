import { connect } from 'react-redux';
import App from './App';
import { bindActionCreators } from 'redux';
import { 
    calculateSavingsDispatcher
} from './redux/Calculations/dispatchers';

const mapStateToProps = (state, ownProps) => {
    return {
      calculations: state.calculations,
    }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        calculateSavings: calculateSavingsDispatcher
    }, dispatch)
);

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;