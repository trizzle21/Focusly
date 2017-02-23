import React from 'react';

import Drawer from 'material-ui/Drawer';
import theme from '../Spotify/modules/CustomTheme';


class SideBar extends React.Component {

	render(){
		<MuiThemeProvider muiTheme={theme}>
			<Drawer width={250}  open={true} >
			
			</Drawer>
		</MuiThemeProvider>

	}
}





export default SideBar;

