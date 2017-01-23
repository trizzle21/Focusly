'use strict'
import { render } from 'react-dom'
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory, browserHistory } from 'react-router'

import signin from "./containers/Signin.js";
import app from "./containers/app.js";

injectTapEventPlugin();

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)


class Root extends React.Component {
	render(){
		return(
//			<Provider store={store}>
  				<Router history={hashHistory}>
   					<Route path='/' component={signin}/>
    				<Route name='timer' path='/timer/:accessToken/:refreshToken' component={app}/>
   	 				<Route path='*' component={NotFound} />
  				</Router>
//  			</Provider> <Route path="/error/:errorMsg" component={Error} />

		);
	}
}


const root_element = document.getElementById('app');
render(<Root />, rootElement);
