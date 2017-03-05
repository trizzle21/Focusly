import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Import specific uncreated actions
import Timer from './Timer';


import { tick, startStop, sessionTypeSet, cycleSet } from './TimerActions';

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

class TimerContainer extends React.Component {



	componentWillMount(){
		this.props.dispatch( { type:'SESSION_TYPE_SET', sessionType: 'working'} );
		this.props.dispatch( { type:'CYCLE_SET', cycleCount: 4} );

		
	}
	
	pause(){
		if(this.props.isCounting){
			this.props.dispatch({ type: "START_STOP" });
			clearInterval(this.props.intervalID);
		} else {
			this.props.dispatch({ type: "START_STOP" })
			var intervalId = setInterval(() => {this.props.dispatch({ type: "TICK" })}, 1000);
			this.props.dispatch({ type: "SET_INTERVAL", intervalID: intervalId });
		}

	}

	componentWillUnmount() {

		clearInterval(this.props.intervalID);
  	}

	render() {
		return (<div>
		 <Timer 
		 	pause={this.pause} 
			secondsRemaining={this.props.secondsRemaining}
			isCounting={this.props.isCounting}
			completed={this.props.completed}
			cycles={this.props.cycles}
			dispatch={this.props.dispatch}
			intervalID={this.props.intervalID}
		 	tick={this.props.tick()}
		 	/>
		</div>
	);}
}


TimerContainer.propTypes = {
	secondsRemaining: React.PropTypes.number,
	sessionCount: React.PropTypes.number,
	isCounting:React.PropTypes.bool,
	working:React.PropTypes.bool,
	cycles:React.PropTypes.number,
	completed:React.PropTypes.number,
	//dispatch:React.PropTypes.func.isRequired
	tick:React.PropTypes.func,
}



function mapStateToProps(state) {
	return {
		intervalID: state.timer.intervalID,
		working: state.timer.working,
		secondsRemaining:state.timer.secondsRemaining,
		cycles:state.timer.cycles,
		isCounting:state.timer.isCounting,
		completed:state.timer.completed,
	}
}



function mapDispatchToProps(dispatch) {
	return {
		tick,
		startStop,
		sessionTypeSet,
		cycleSet,
		dispatch,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);

