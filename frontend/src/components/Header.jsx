import React, { Fragment } from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Fragment>
      <header className='header'>
        <div className='logo'>
          <Link to='/'>GoalSetter</Link>
        </div>
        <ul>
          <li>
            <Link to='/login'>
              <FaSignInAlt /> Login
            </Link>
          </li>

          <li>
            <Link to='/register'>
              <FaUser /> Register
            </Link>
          </li>
        </ul>
      </header>
    </Fragment>
  );
};

export default Header;
