import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';

import AuthOrApp from './main/authOrApp'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <AuthOrApp />
    </Provider>
    , document.getElementById('app')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
