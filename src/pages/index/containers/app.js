import React, { Component } from 'react';
import Connect from '../connect';
import classNames from 'classnames';
import Menu from '../components/menu';

// import 'normalize.css';
import 'styles/main.styl';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.props.actions.toggleMenu();
  }
  render() {
    let layoutClass= classNames({ active: this.props.menu });
    let menuLinkClass= classNames('menu-link', { active: this.props.menu });
    return (
      <div id="layout" className={layoutClass}>
        <a id="menuLink" className={menuLinkClass} onClick={this.toggleMenu}><span></span></a>
        <Menu state={this.props.menu} />
        <div id="main">{this.props.children}</div>
      </div>
    );
  }
}


export default Connect(App);
