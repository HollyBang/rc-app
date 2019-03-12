import React, { Component } from 'react';
import { Media, Button } from 'reactstrap';

const imgStyle = {
  maxHeight: 128,
  maxWidth: 128
}

export default class NewsItem extends Component {

  render() {
    const { news, languages, readNewsCallback } = this.props;

    let PublishDate = new Date(news.PublishDate * 1000);

    return (
      <Media>
        <Media left>
          <Media object style={imgStyle} src={news.Image} alt="News image" />
        </Media>
        <Media body>
          <Media className="news-block__title">
            {news.Title}
          </Media>
          {/* {news.Description} */}
          {PublishDate.toLocaleDateString()} {PublishDate.toLocaleTimeString()}
          <br />
          <Button className="news-block__btn" size="sm" onClick={readNewsCallback}>{languages.resources.newsReadMore}</Button>
          <Button className="news-block__btn" size="sm">{languages.resources.newsRequestNew}</Button>
        </Media>
      </Media>
    )
  }
}