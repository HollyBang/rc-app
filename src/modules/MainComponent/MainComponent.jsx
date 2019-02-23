import React, { Component } from 'react'
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import './general.css';

export default class mainComponent extends Component {
  render() {
    console.log('render ---->>> mainComponent');
    return (
      <Header/>

    )
  }
}
