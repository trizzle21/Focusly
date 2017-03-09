import React from 'react';

import PlayButton from './PlayButton';

import Drawer from 'material-ui/Drawer';
import theme from '../Spotify/modules/CustomTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class SideBar extends React.Component {

	render(){
		console.log(this.props);
		return(
			<MuiThemeProvider muiTheme={theme}>
				<div>
					<Drawer width={250}  open={true} >
						<PlayButton uri={this.props.uri}/>
					</Drawer>
				</div>
			</MuiThemeProvider>
		);
	}
}





export default SideBar;

