import React, { Component } from 'react';
import classNames from 'classnames';
import Connect from '../connect';
import Button from 'components/button';

class Profile extends Component {
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
    console.log(514);
    console.log(this.props);
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
        <p>this page is profile page.</p>
        <Button type="primary" onClick={this.handleClick}>this is a button</Button>
        <p className="loading">loading...</p>
        <ul>{list}</ul>
      </div>
    );
  }
}

export default Connect(Profile);
