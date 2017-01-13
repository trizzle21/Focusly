'use strict'
import { render } from 'react-dom'
import React from 'react';
import FormCard from "./modules/tabata_form.js";
import MainAppBar from "./modules/navbar.js";
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory } from 'react-router'
import signin from "./modules/Signin.js";


injectTapEventPlugin();


render((
  <Router history={hashHistory}>
    <Route path='/' component={signin}/>
    <Route path='/login' />
    <Route path="/tabata_form" component={FormCard}/>
  </Router>
), document.getElementById('app'))



