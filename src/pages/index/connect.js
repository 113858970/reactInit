
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as Actions from './actions';

function mapStateToProps(state) {
  return {
    ...state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
