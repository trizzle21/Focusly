import React from 'react';


//Custom imports
import Timer from './modules/timer.js';
import theme from './modules/customtheme.js';
import EntryForm from './modules/form.js'; 
import SideBar from './modules/SideBar.js'


//Material UI imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import CardTitle from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';




const styles ={
	appBar: {
		margin:0,
	},
	submit: {
  
  	}

}

export default class PresentationalApp extends React.component{
	
	static propTypes = {
    	value: PropTypes.string.isRequired,
    	onChange: PropTypes.func.isRequired
  		openDialog:PropTypes.bool


  	}



	

	render() {
		return ( 			
		const actions = [
  			<RaisedButton
      			label="Submit"
      			labelPosition="after"
      			primary={true}
      			style={styles.button}
      			containerElement="label"
      			onClick={this.submitSession.bind(this)}
  			/>
    	];


		<MuiThemeProvider muiTheme={theme}>
					<div>

					<TabataForm />


					

					<div className="grid-container">
						<div className="row">
	 						<div className="col-3">
	 							<SideBar />
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
	 							<Timer  />
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
	 		);





	}
}