import { connect } from 'react-redux';
import InputGraphSection from '../InputGraphSection';
import { bindActionCreators } from 'redux';
import { 
    interestRateDispatcher,
    monthlyAmountDispatcher,
    setSavingsAmountDispatcher,
    setFrequencyDispatcher,
    calculateSavingsDispatcher
} from '../../redux/Calculations/dispatchers';

const mapStateToProps = (state, ownProps) => {
    return {
      calculations: state.calculations,
    }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setInterestRate: interestRateDispatcher,
        setMonthlyAmount: monthlyAmountDispatcher,
        setSavingsAmount: setSavingsAmountDispatcher,
        setFrequency: setFrequencyDispatcher,
        calculateSavings: calculateSavingsDispatcher
    }, dispatch)
);

const InputGraphSectionContainer = connect(mapStateToProps, mapDispatchToProps)(InputGraphSection);

export default InputGraphSectionContainer;
