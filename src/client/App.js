import React, {PropTypes} from 'react';
import { Link } from 'react-router';
 

import { connect } from 'react-redux';

import PresentationalApp from '../components/Session.js';


class App extends React.Component {  	
  static propTypes = {
      cycles: PropTypes.string.isRequired,

    }







  	render() {
  		return (
  			<div className="grid-container">
          <div className="row">
            <div className="col-3">
              <SideBar />
            </div>
            

  		)
	}
}

export default App