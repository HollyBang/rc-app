import React, { Component } from 'react'
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import './general.css';
import News from '../News/index';

export default class mainComponent extends Component {
  render() {
    console.log('render ---->>> mainComponent');
    return (
      <div>
        <Header languages={this.props.languages}/>
        <main>
          <News languages={this.props.languages}/>
        </main>
      </div>
    )
  }
}
