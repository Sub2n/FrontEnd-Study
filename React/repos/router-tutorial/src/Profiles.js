import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';

const activeStyle = {
  background: 'black',
  color: 'white'
};

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/subin">
            subin 프로필
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/yoosun">
            yoosun 프로필
          </NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
