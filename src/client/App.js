import React, {PropTypes} from 'react';
import { Link } from 'react-router';
 

import { connect } from 'react-redux';

import PresentationalApp from '../components/Session.js';


import Main from './containers/TimerContainer';
import SideBar from './containers/SideBarContainer';
import TabataForm from './containers/SideBarContainer';




class App extends React.Component {  	
  static propTypes = {
      cycles: PropTypes.string.isRequired,

    }







  	render() {
  		return (
  			<MuiThemeProvider muiTheme={theme}>
          <TabataForm />
          <div className="grid-container">
            <div className="row">
              <div className="col-3">
                <SideBar />
              </div>
            <div className="col-9">
              <Main />
            </div>
          </div>
          </div>
        </MuiThemeProvider>


  		)
	}
}

export default App