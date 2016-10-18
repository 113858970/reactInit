import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import messages from './messages';
import { changeLocale } from '../../../../i18n/LanguageProvider/actions';

// And if you don't have state or refs,
// prefer normal functions (not arrow functions) over classes:
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handlerClick = this.handlerClick.bind(this);
    this.changeLocate = ::this.changeLocate;
  }

  handlerClick(score) {
    this.setState({ score });
  }

  changeLocate(e) {
    this.props.changeLocate(e.target.value);
  }

  render() {
    return (
      <div>
        <h2>
          <FormattedMessage {...messages.helloWorld} values={{ random: Math.random() }} />
        </h2>
        <select onChange={this.changeLocate}>
          <option value="zh">zh</option>
          <option value="en">en</option>
        </select>
        <p>this page is home page.</p>
      </div>
    );
  }
}

Home.propTypes = {
  changeLocate: React.PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeLocate: locate => dispatch(changeLocale(locate)),
});

export default connect(null, mapDispatchToProps)(Home);
