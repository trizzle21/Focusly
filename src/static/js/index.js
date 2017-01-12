'use strict'
import { render } from 'react-dom'
import React from 'react';
import FormCard from "./modules/signin.js";
import MainAppBar from "./modules/navbar.js";
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory } from 'react-router'



injectTapEventPlugin();


render((
  <Router history={hashHistory}>
    <Route path="/" component={FormCard}/>
  </Router>
), document.getElementById('app'))



