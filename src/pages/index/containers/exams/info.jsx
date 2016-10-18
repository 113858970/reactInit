import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { exams as examsActions } from '../../actions';
import classNames from 'classnames';

const propTypes = {
  params: PropTypes.object.isRequired,
};

const defaultProps = {

};

class Info extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    const { planId, solutionId, quizId } = this.props.params;
    const params = {
      planId,
      solutionId,
      quizId,
    };
    examsActions.fetchExams(params);
  }

  render() {
    const props = this.props;
    return (
      <div>
        <h3>this is course</h3>
        <div>{props.children}</div>
      </div>
    );
  }
}

Info.propTypes = propTypes;
Info.defaultProps = defaultProps;

export default connect((state, ownProps) => {
  return {
    pathname: ownProps.location.pathname
  }
})(Info);
