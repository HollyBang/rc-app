import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainComponent from './modules/MainComponent/index';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={store}>
        <MainComponent/>
    </Provider>,
    document.getElementById('root')
);
