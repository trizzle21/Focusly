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
			secondsRemaining:1500,
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
		var minutes = this.state.secondsRemaining/60;
		var seconds = this.state.secondsRemaining % 60;

		return (
			<div>
				<div className="time_count">{this.minutes}:{this.seconds} </div>

				<div className="row">
					<RaisedButton label="Start/Start" primary={true} style={styles.buttons} />
				</div>
			</div>

		)
	}
}

export default Timer

