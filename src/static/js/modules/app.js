import React from 'react';
import { Link } from 'react-router'
 


//Custom imports
import Timer from './components/timer.js';
import theme from './components/customtheme.js';

//Material UI imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';





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
				  <div>
				  	<AppBar
    					title="Focusly"
    					iconElementLeft={<Link to="/tabata"><IconButton><ArrowBack /></IconButton></Link>}
 				 	/>
			

				<div className="grid-container">
					<div className="col-4">


					</div>
 				
 				<div className="col-8">
 					<div className="col-3"></div>
					
					<div className="col-6">

 						<div className="count_down_clock">
 							<Timer />
						</div>

					</div>
					<div className="col-3"></div>

				</div>


 				</div>
 				</div>

 			</MuiThemeProvider>
 		)
	}
}

export default MainApp