import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import CircularProgress from 'material-ui/CircularProgress';

const style = {
  margin: 12,
};



class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	
			minutesRemaining: 25,
			secondsRemaining:0,
			completed: 100,
			totalElapsed: 0,//this.props.time
		};
	}


	tick(){

	}

	clearInterval(){}

	render() {


		return (
			<div>
				<div className="circleProgress">
					<CircularProgress />
					<div className="time_count"> </div>
				</div>

				<div className="row">
					<RaisedButton label="Start" primary={true} style={style} />
    				<RaisedButton label="Stop" secondary={true} style={style} />
				</div>
			</div>

		)
	}
}

export default Timer

