import {connect} from 'react-redux';

import * as Actions from './ActionTypes';
import AgilityComponent from '../Components/AgilityComponent';

const mapStateToProps = state => ({
  count: state.agilityReducer.count,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({type: Actions.AGILITY_INCREMENT}),
  decrement: () => dispatch({type: Actions.AGILITY_DECREMENT}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AgilityComponent);
