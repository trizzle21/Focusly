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
import RaisedButton from 'material-ui/RaisedButton';
import CardTitle from 'material-ui/Card';
import EntryForm from './components/form.js'; 
import Dialog from 'material-ui/Dialog';




const styles ={
	appBar: {
		margin:0,
	},
	submit: {
  
  	}

}



class MainApp extends React.Component {
	constructor(props){
		super(props);
		this.state= {
			openDrawer: true,
			openDialog:true,
			sessions: this.props.location.query.sessions,
			sessionName:'work'
		}

	}


	submitSession(){
		this.setState({openDialog:false});

	}



  	render() {
  		
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
  		//render form here
  		return (
  			<MuiThemeProvider muiTheme={theme}>
				<div>

				<Dialog
          			title="Set Up Tabata Session"
          			subtitle="To get started, choose Tabata length and number of sessions"
          			actions={actions}
          			modal={true}
          			open={this.state.openDialog}
        		>
  
				<EntryForm />

        		</Dialog>


				

				<div className="grid-container">


				<div className="row">
 					<div className="col-3">
						<Drawer width={250}  open={this.state.open} >

						HELLO


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
 		)
	}
}

export default MainApp