import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

function Menu({ state }) {
  const menuClass = classNames({ active: state });
  return (
    <div id="menu" className={menuClass}>
      <div>
        <Link to="/">LOGO</Link>
        <ul>
          <li><Link activeClassName="active" to="/home">HOME</Link></li>
          <li><Link activeClassName="active" to="/profile">PROFILE</Link></li>
          <li><Link activeClassName="active" to="/courses/1">COURSE</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
