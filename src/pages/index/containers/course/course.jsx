import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Connect from '../../connect';
import Button from 'components/button';

class Course extends Component {
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount() {
    this.props.actions.fetchRepo('node');
  }
  handleClick(e) {
    console.log('btn click');
  }
  render() {
    const detail = this.props.course.detail;
    let list = [];
    for (let i in detail.items) {
      const item = detail.items[i];
      list.push(<li key={i}>{item.full_name}</li>);
    }
    const klass = classNames({
      isFetching: detail.isFetching,
      isFetched: !detail.isFetching,
    });
    return (
      <div id="profile" className={klass}>
        <h2>PROFILE</h2>
        <p>this page is course page.</p>
        <Button type="primary" onClick={this.handleClick}>this is a button</Button>
        <p className="loading">loading...</p>
        <ul>{list}</ul>
      </div>
    );
  }
}

export default Connect(Course);
