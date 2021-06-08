import React from 'react'
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk  from 'redux-thunk'
import { Provider } from 'react-redux'
import  memeReducer from "./reducers/memeReducer"

import App from './App';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;


let store = createStore(memeReducer, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root'));