'use strict'
import ReactDom from 'react-dom';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import error from "./Spotify/modules/Error";
import reducer from './reducer';
import signin from "./Spotify/modules/Signin";
import app from "./App";

injectTapEventPlugin();

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)


const store = createStore(reducer);






class Root extends React.Component {
	render(){
		return(
			<Provider store={store}>
  				<Router history={hashHistory}>
   					<Route path='/' component={signin}/>
    				<Route name='/timer' path='timer' component={app}/>
  					<Route path='/error/:errorMsg' component={error}/>
  				</Router>
  			</Provider> 

		);
	}
}

//:accessToken/:refreshToken

ReactDom.render(<Root />, document.getElementById('app'));
