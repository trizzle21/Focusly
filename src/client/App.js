import React from 'react';
import { Link } from 'react-router';
 

import { connect } from 'react-redux';



import Timer from './Timer/TimerContainer';
import SideBar from './SideBar/SideBarContainer';
import Form from './Form/FormContainer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './Spotify/modules/CustomTheme';
import setTokens from './Spotify/SpotifyActions';

export default class App extends React.Component {  	

    render() {
      return (
  			<MuiThemeProvider muiTheme={theme}>
          <div className="grid-container">

            <div className="row">
              <div className="col-3">
                  <SideBar />

              </div>
            <div className="col-9">
              <Timer />
            </div>
          </div>
          </div>
        </MuiThemeProvider>


  		);
	}
}





        // <MuiThemeProvider muiTheme={theme}>
        //   <Form />
        //   <div className="grid-container">
        //            <Form params={this.props.params}/>
     
        //<div className="row">
        //       <div className="col-3">
        //         <SideBar />
        //       </div>
        //     <div className="col-9">
        //       <Main />
        //     </div>
        //   </div>
        //   </div>
        // </MuiThemeProvider>
