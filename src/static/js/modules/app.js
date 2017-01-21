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
import MenuItem from 'material-ui/MenuItem';


const styles ={
	appBar: {
		margin:0,
	}
}



class MainApp extends React.Component {
	constructor(props){
		super(props);
		this.state= {
			open: true,
			sessions: this.props.location.query.sessions,
			sessionName:'work'
		}

	}





  	render() {

  		//render form here
  		return (
  			<MuiThemeProvider muiTheme={theme}>
				  <div>


				<div className="grid-container">


				<div className="row">
 					<div className="col-3">
						<Drawer width={'25%'}  open={this.state.open} >




       	 				</Drawer>


 					</div>
 					


 					<div className="col-9">
						<AppBar
    						style={styles.appBar}
    						title="Focusly"
    						iconElementLeft={<Link to="/tabata"><IconButton  ><ArrowBack color={"white"}/></IconButton></Link>}
 					 		color="#009688"
 					 	/>
 					 	<h4>Sessions: {this.state.sessions}</h4>

 					 	<div className="count_down_clock">
 							<Timer />
						</div>



 					</div>

 				</div>


				<div className="row">
 					<div className="col-2"></div>

 				<div className="col-8">
 					<div className="col-3"></div>
					
					<div className="col-6">


					</div>
					<div className="col-2"></div>
				</div>
				</div>


 				</div>
 				</div>

 			</MuiThemeProvider>
 		)
	}
}

export default MainApp