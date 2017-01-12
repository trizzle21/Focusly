import React from 'react';
import Drawer from 'material-ui/Drawer';
import Timer from './components/timer.js';



class MainApp extends React.Component {
	constructor(props){
		super(props);
		this.states= {
			time:1500,
			
		}

	}


  	render() {

  		//render form here
  		return (
 			<MuiThemeProvider>
				<div className="container">
 					<div className="nav sidebar-nav">
 						

 						<ul class="">
 							<li></li>
 							<li></li>
							<li></li>


 						</ul>



 					</div>
 				

 				<div className="">

 					<Timer start={this.state.time} />


 				</div>



 				</div>
 			</MuiThemeProvider>
 		)
} 