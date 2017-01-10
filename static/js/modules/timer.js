import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import CircularProgress from 'material-ui/CircularProgress';



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
			secondsRemaining:0,
			completed: 100,
			totalElapsed: 0,//this.props.time
		};
	}


	tick(){
		this.setState({secondsRemaining: this.state.secondsRemaining - 1});

	}

	componentDidMount(){
		this.setState({secondsRemaining: this.props.second_count - 1});
		this.interval = setInterval(this.tick(), 1000);
	}
	
	componentWillUnmount() {
    	clearInterval(this.interval);
  	}

	render() {
		var minutes = this.secondsRemaining/60;
		var seconds = this.secondsRemaining % 60;

		return (
			<div>
				<div className="circleProgress">
					<CircularProgress
          				mode="determinate"
          				value={this.state.completed}
		 		 		style={styles.circProgress}
          				size={400}
          				thickness={7}
        	
       			 	/>
					<div className="time_count">{this.minutes}:{this.seconds} </div>
				</div>

				<div className="row">
					<RaisedButton label="Start" primary={true} style={styles.buttons} />
    				<RaisedButton label="Stop" secondary={true} style={styles.buttons} />
				</div>
			</div>

		)
	}
}

export default Timer

