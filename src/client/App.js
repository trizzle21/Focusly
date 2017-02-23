import React from 'react';
import { Link } from 'react-router';
 

import { connect } from 'react-redux';



import Main from './Timer/TimerContainer';
import SideBar from './SideBar/SideBarContainer';
import Form from './Form/FormContainer';




export default class App extends React.Component {  	

  	render() {
  		return (
  			<MuiThemeProvider muiTheme={theme}>
          <Form />
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

