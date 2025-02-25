import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import reducer from './reducers/reducer';
import {Provider} from 'react-redux';

const mystore = createStore(reducer);

ReactDOM.render(<Provider store={mystore}><App /></Provider>, document.getElementById('root'));