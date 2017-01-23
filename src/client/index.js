'use strict'
import { render } from 'react-dom'
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'


import signin from "./containers/signin.js";
import app from "./containers/app.js";

injectTapEventPlugin();

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)


const store = createStore(
	...reducers

)


class Root extends React.Component {
	render(){
		return(
			<Provider store={store}>
  				<Router history={hashHistory}>
   					<Route path='/' component={signin}/>
    				<Route name='timer' path='/timer/:accessToken/:refreshToken' component={app}/>
   	 				<Route path='*' component={NotFound} />
  					<Route path='/error/:errorMsg' component={error}/>
  				</Router>
  			</Provider> 

		);
	}
}


const root_element = document.getElementById('app');
render(<Root />, rootElement);
