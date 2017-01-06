'use strict'
import ReactDOM from 'react-dom';
import React from 'react';
import FormCard from "./modules/formcard.js";
import MainAppBar from "./modules/navbar.js";
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();






ReactDOM.render(
  <FormCard />,
  document.getElementById('MainForm')
);