import React from 'react';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



const MainAppBar = () => (
 <MuiThemeProvider>
	<AppBar
    	title="WorkNShake"
    	iconElementLeft= {<FontIcon
     				 		className="muidocs-icon-action-library-music"	
    					/>}


  	/>
  </MuiThemeProvider>


);


export default MainAppBar;