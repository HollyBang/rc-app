import React, { Component } from 'react';
import Team from './components/Team/Team.jsx';
import Balance from './components/Balance/Balance.jsx';
import Challenge from './components/Challenge/Challenge.jsx';
import Logo from './components/Logo/Logo.jsx';
import Notification from './components/Notification/Notification.jsx';
import FullScreen from './components/FullScreen/FullScreen.jsx';
import Settings from './components/Settings/index';
import Logout from './components/Logout/Logout.jsx';


export default class Header extends Component {
  render() {

    console.log('render----->>>Header');
    
    return (
      <header className="header-wrap">
        <div className="container header">
          <div className="header__column">
            <Team/>
            <Balance/>
            <Challenge/>
          </div>
          <div className="header__column">
            <Logo/>
          </div>
          <div className="header__column">
            <Notification/>
            <FullScreen/>
            <Settings languages={this.props.languages}/>
            <Logout/>
          </div>
        </div>
      </header>
    );
  }
};