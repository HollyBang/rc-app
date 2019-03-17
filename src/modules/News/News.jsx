import React, { Component } from 'react';
import NewsItem from './components/NewsItem.jsx';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class News extends Component {

  constructor(props) {
    super(props);
    this.props.getNews();
  }

  readNewsCallback = (news) => {
    console.log("READ_NEWS news id = " + news.ID);
    this.props.readNews(news);
  }

  findNewsToOpen() {
    const { news } = this.props;
    var openedNews = news.find(function (item) {
      return item.isOpened === true;
    });
    return openedNews;
  }

  render() {

    console.log('render --------------> News');
    const { news, languages } = this.props;

    const newsList = news.map((item, i) => <NewsItem key={item.ID} news={item} languages={languages} readNewsCallback={() => this.readNewsCallback(item)} />)

    const openedNews = this.findNewsToOpen();

    return (
      <>
        <section className="news-block">
          <div>
            <span>{languages.resources.newsModuleTitle}</span>
            <button type="button" className="close"><span style={{ color: 'white' }}>×</span></button>
          </div>
          {newsList}
        </section>
        <Modal isOpen={!!openedNews} size="lg">
          <ModalHeader>{(!!openedNews ? openedNews.Title : "")}</ModalHeader>
          <ModalBody>
            {/* {(!!openedNews ? openedNews.Desription : "")} */}
            {(!!openedNews ? <div className="content" dangerouslySetInnerHTML={{__html: openedNews.Encoded}}></div> : "")}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.props.closeNews(openedNews)}>Close</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }
}