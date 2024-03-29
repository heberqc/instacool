import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as reducers from './ducks'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

import services from './services'

const store = createStore(combineReducers({
	...reducers,
	form: formReducer,
}), applyMiddleware(thunk.withExtraArgument(services)))

const history = createBrowserHistory()

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App history={history} />
		</Router>
	</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
