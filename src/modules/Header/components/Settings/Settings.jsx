import React, { Component } from 'react';

export default class Settings extends Component {

  setLanguage = (e) => {
    this.props.changeLanguage(e.target.value);
  };

  render() {
    const { languages } = this.props;
    return (
      <div className="settings">
        <a href="#" className="settings__link">
          <img src="assets/img/settings.svg" alt="settings" className="settings__icon"/>
        </a>
        <select onChange={this.setLanguage}>
            <option value="en">{languages.languages.en}</option>
            <option value="ru">{languages.languages.ru}</option>
            <option value="ar">{languages.languages.ar}</option>
        </select>
      </div>
    );
  }
}