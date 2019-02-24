import React, { Component } from 'react';

export default class News extends Component {

  render() {

    console.log('render --------------> News');
    const { languages } = this.props;
    return (
      <section className="news-block">
        <div style={{color:'white'}}>{languages.resources.hello}</div>
      </section>
    )
  }
}