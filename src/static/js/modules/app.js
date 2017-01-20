import React from 'react';
import Drawer from 'material-ui/Drawer';
import Timer from './components/timer.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './components/customtheme.js';



class MainApp extends React.Component {
	constructor(props){
		super(props);
		this.states= {
			
			// sessions: this.props.sessions,
			// work_music: this.props.WorkMusicType,
			// rest_music: this.props.RestMusicType,
			
		}

	}


  	render() {

  		//render form here
  		return (
  			<MuiThemeProvider muiTheme={theme}>
				
				<div className="container">

 				

 				<div className="count_down_clock">

 					<Timer />


 				</div>



 				</div>
 			</MuiThemeProvider>
 		)
	}
}

export default MainApp