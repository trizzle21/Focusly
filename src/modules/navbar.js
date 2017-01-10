import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const iconStyles = {
  marginRight: 24,
};


const MainAppBar = () => (
 <MuiThemeProvider>
	<AppBar
    	title="WorkNShake"
    	//Todo: look into why this is broken
    	iconElementLeft={<FontIcon className="muidocs-icon-action-home" style={iconStyles}></FontIcon>}
  	/>
  </MuiThemeProvider>


);


export default MainAppBar;