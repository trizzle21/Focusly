import React, {PropTypes} from 'react';
import { Link } from 'react-router';
 

import { connect } from 'react-redux';

import PresentationalApp from '../components/Session.js';


class MainApp extends React.Component {  	
  static propTypes = {
      cycles: PropTypes.string.isRequired,

    }







  	render() {
  		

  		//render form here
  		return (
  			
        <PresentationalApp />
  		)
	}
}

export default MainApp