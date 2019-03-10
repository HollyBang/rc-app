import React, { Component } from 'react';
import NewsItem from './components/NewsItem.jsx';

export default class News extends Component {

  constructor(props) {
    super(props);
    this.props.getNews();
  }

  render() {

    console.log('render --------------> News');
    const { news, languages } = this.props;

    const newsList = news.map((item, i) => <NewsItem key={item.ID} news={item} languages={languages} />)

    return (
      <section className="news-block">
        <div>
          <span>{languages.resources.newsModuleTitle}</span>
          <button type="button" className="close"><span style={{color: 'white'}}>×</span></button>
        </div>
        {newsList}
      </section>
    )
  }
}