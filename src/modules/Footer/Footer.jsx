import { Component } from 'react';

export default class Footer extends Component{
  render() {
    console.log('render----->>>Footer');

    return (
      <footer className="footer-wrap">
        <div className="container footer">
          <div className="dynamic-content">
            <p className="dynamic-content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              consequuntur,
              cumque dignissimos, eos est ex excepturi exercitationem illum ipsam laboriosam nobis repellat? Aut
              doloribus
              eligendi exercitationem id, magnam optio possimus.</p>
          </div>
        </div>
      </footer>
    );
  };
}