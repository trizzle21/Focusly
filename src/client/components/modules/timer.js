import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './customtheme.js';







const styles = {
  circProgress: {
    position: "absolute",
    marginTop:20,
    marginLeft:220,
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
			workSession:true,
			secondsRemaining:1500,
			completed: 100,
			interval:setInterval(this.tick.bind(this), 1000),
			sessionCount:this.props.sessionCount,


		};
	}


	tick(){
		if(this.state.secondsRemaining >= 0) { 
			this.setState({secondsRemaining: this.state.secondsRemaining - 1, completed: (this.state.secondsRemaining/1500)*100});
		} else {
       		clearInterval(this.state.interval);
       		if(this.state.sessionCount != 0 && this.state.workSession == false){
       			sessionCount--;
       			this.setState({secondsRemaining: 300, completed: (this.state.secondsRemaining/300)*100,workSession: true});
       		} else if (this.state.sessionCount != 0){
       			this.setState({secondsRemaining: 1500, completed: (this.state.secondsRemaining/1500)*100, workSession: false});
       		} else {

       		}
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
				<div className="circularProgress">
				<CircularProgress
          			mode="determinate"
          			value={this.state.completed}
          			size={450}
          			thickness={15}
          			style={styles.circProgress}
          			color="#009688"
        		/>
        		</div>
        		<div className="timer_button">
					<div className="time_count">{minutes}:{seconds} </div>

					<div className="pause_button">
						<RaisedButton label="Start/Start" primary={true} style={styles.buttons} onClick={this.pause.bind(this)}/>
					</div>
				</div>
			</div>
			</MuiThemeProvider>
		)
	}
}

export default Timer

