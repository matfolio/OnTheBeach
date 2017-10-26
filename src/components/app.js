import React from 'react';
import {render} from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducer/index';
import Layout from './layout.jsx';
 require('../../assets/scss/styles.css');

const store = createStore(
    reducers
);


render(
    <Provider store={store}>
        <Layout />
    </Provider>,
    document.getElementById('root')
);