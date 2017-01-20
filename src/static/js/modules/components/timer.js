import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './customtheme.js';



const styles = {
  circProgress: {
    position: "absolute",
  },
  buttons: {
  	margin: 12,
  }
};

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	
			isCounting:true,
			secondsRemaining:1500,
			completed: 100,
			interval:setInterval(this.tick.bind(this), 1000),
		};
	}


	tick(){
		if(this.state.secondsRemaining >= 0) { 
			this.setState({secondsRemaining: this.state.secondsRemaining - 1});
		} else {
       		clearInterval(this.state.interval);
   		}

	}

	pause(){
		if(this.state.isCounting == true){
			clearInterval(this.state.interval);
			this.state.isCounting = false;
		} else {
			var intervalID = setInterval(this.tick.bind(this), 1000);
			this.setState({interval:intervalID});
			this.state.isCounting = true;
		}

	}

	
	
	componentWillUnmount() {
    	clearInterval(this.state.interval);
  	}

	render() {
		var minutes = Math.floor(this.state.secondsRemaining/60);
		var seconds = this.state.secondsRemaining % 60;
		if(seconds < 10) {
			seconds = '0' + seconds;
		}
		return (
			<MuiThemeProvider muiTheme={theme}>

			<div>
				<div className="time_count">{minutes}:{seconds} </div>

				<div className="pause_button">
					<RaisedButton label="Start/Start" primary={true} style={styles.buttons} onClick={this.pause.bind(this)}/>
				</div>
			</div>
			</MuiThemeProvider>
		)
	}
}

export default Timer

