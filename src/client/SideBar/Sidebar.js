import React from 'react';

import PlayButton from './PlayButton';

import Drawer from 'material-ui/Drawer';
import theme from '../Spotify/modules/CustomTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class SideBar extends React.Component {

	render(){
		return(
			<MuiThemeProvider muiTheme={theme}>
				<div>
					<Drawer width={250}  open={true} >
						
					</Drawer>
				</div>
		</MuiThemeProvider>
		);
	}
}





export default SideBar;

