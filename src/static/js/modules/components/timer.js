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
			interval:0,
		};
	}


	tick(){
		
		this.setState({secondsRemaining: this.state.secondsRemaining - 1});

	}

	pause(){
		if(this.state.isCounting == true){
			this.state.isCounting = false;
			clearInterval(this.state.interval);
		} else {
			this.interval = setInterval(this.tick(), 1000);
		}
	}

	componentDidMount(){
		
		this.setState({secondsRemaining: this.props.second_count - 1});
		var intervalId = setInterval(this.tick(), this.secondsRemaining);
		this.setState({interval: intervalId});
	}
	
	componentWillUnmount() {
    	clearInterval(this.state.interval);
  	}

	render() {
		var minutes = Math.floor(this.state.secondsRemaining/60);
		var seconds = this.state.secondsRemaining % 60;

		return (
			<MuiThemeProvider muiTheme={theme}>

			<div>
				<div className="time_count">{minutes}:{seconds} </div>

				<div className="row">
					<RaisedButton label="Start/Start" primary={true} style={styles.buttons} onClick={this.pause.bind(this)}/>
				</div>
			</div>
			</MuiThemeProvider>
		)
	}
}

export default Timer

